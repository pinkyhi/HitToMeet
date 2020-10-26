using HitToMeet.DAL.Entities.BaseEntities;

namespace HitToMeet.DAL.Entities
{
    public class Skin : BaseEntity
    {
        public string ImgUrl { get; set; }

        public int AnimalId { get; set; }

        public Animal Animal { get; set; }
    }
}
