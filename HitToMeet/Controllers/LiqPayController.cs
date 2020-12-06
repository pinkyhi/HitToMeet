namespace HitToMeet.Controllers
{
    using AutoMapper;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using HitToMeet.Core.Options;
    using HitToMeet.LiqPay.Exceptions;
    using HitToMeet.LiqPay.Interfaces;
    using HitToMeet.LiqPay.Models;
    using HitToMeet.LiqPay.Requests;
    using HitToMeet.LiqPay.Responses;
    using HitToMeet.LiqPay.Static;

    public class LiqPayController : ControllerBase
    {
        private readonly ILiqPayService liqPayService;
        private readonly IMapper mapper;
        private readonly LiqPayOptions liqPayOptions;

        public LiqPayController(IConfiguration configuration, ILiqPayService liqPayService, IMapper mapper)
        {
            this.liqPayOptions = new LiqPayOptions();
            configuration.GetSection(nameof(LiqPayOptions)).Bind(this.liqPayOptions);
            this.liqPayService = liqPayService;
            this.mapper = mapper;
        }

        [HttpPost(API.Routes.DefaultRoutes.LiqPay.LiqPayRedirect)]
        public IActionResult RedirectOnLiqPay([FromBody] LiqPayCheckoutRequest request)
        {
            var model = this.mapper.Map<LiqPayCheckoutModel>(request);
            model.Action = LiqPayStatic.Actions.Pay;
            model.Public_Key = this.liqPayOptions.PublicKey;
            model.Private_Key = this.liqPayOptions.PrivateKey;
            model.Sandbox = 1;
            var(data, signature) = this.liqPayService.EncryptLiqPay(model);

            return this.Ok(new LiqPayTupleResponse() { Data = data, Signature = signature });
        }

        [HttpPost(API.Routes.DefaultRoutes.LiqPay.LiqPayNotifications)]
        public IActionResult Notifications(LiqPayNotificationRequest request)
        {
            if (this.liqPayService.CheckDataBySignature(request.Data, request.Signature, this.liqPayOptions.PrivateKey))
            {
                LiqPayAnswerModel model = this.liqPayService.AnswerModelFromData(request.Data);
                // Model rework
            }
            else
            {
                throw new WrongSignatureException();
            }

            return this.Ok();
        }
    }
}