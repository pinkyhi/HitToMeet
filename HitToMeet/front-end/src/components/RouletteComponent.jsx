import { Component } from 'react';
import { Label, Col, Row, Button } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import  './Roulette.css';
import $ from 'jquery';




class Roulette extends Component {
    constructor(props) {
        super(props);
        this.coins = 200;
        this.coine = 200;
        this.handleSubmit = this.handleSubmit.bind(this);

    }

  handleSubmit(values) {
     /*   this.props.createAccount(values.Email, values.UserName, values.Password);*/
    }

    componentDidMount() {
        var radios = document.getElementsByName('radio');

        $(document).ready(function () {
            for ( var i = 0; i < 3; i++) {
                $(".list li").clone().appendTo(".list");
            }
            $('.dibutton').click(function () {
                $('.window').css({
                    right: "0"
                })
                $('.list li').css({
                    border: '4px solid transparent'
                })
                function selfRandom(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }
                var x = selfRandom(50, 100);
                $('.list li:eq('+x+')').css({
                    
                  
                })
                $('.window').animate({
                    right: ((x*130)+(x*8-12)-119)
                }, 10000);
            });
        });
    
      }


      
    render() {
        return (
            <div className="container">
                    <div className="col-12">
                        
                    </div>
                    <div className="login">
                    <h2 className="Title">Рулетка</h2>
                        <Form model="feedback" onSubmit={this.onSubmit}>
                        
                            <Row className="form-group">
                            <h5 className="balc">Баланс:</h5>
                        <img src="assets/images/star.svg" className="icon" />
                         <h5 className="coin">{this.coins}</h5>
                        <img src="assets/images/icon.svg" className="icon1" />
                            <h5 className="coin">{ this.coine}</h5>
                            </Row>
                            <Row className="form-group">
                                    <div className="wraper">
                                    <div className="arrowup"></div>
                                    <div className="arrowdown"></div>
                                    <div className="window">
                                    <ul className="list">
                                        
                                    </ul>
                                        <ul className="list">
                                            <li><img src="assets/skin/cat.png" alt=""/></li>
                                            <li><img src="assets/skin/sheep.png" alt=""/></li>
                                            <li><img src="assets/skin/fish.png" alt=""/></li>
                                            <li><img src="assets/skin/eagle.png" alt=""/></li>
                                            <li><img src="assets/skin/wolf.png" alt=""/></li>
                                        </ul>
                                    </div>
                                    </div>
                            </Row>
                            <Row className="form-group">
                                <div className="sex">
                                    <h5 className="sexh">Открыть за:</h5>
                                <div className="dem">
                            <label className="containers">
                 <input type="radio" onChange={this.handleChange} value = "1"  name="radio" checked/>
                  <span className="checkmark">
                  <div className="selecticon">
                      <img src="assets/images/star.svg" className="icon" />
                      </div>
                      <div className="selecticon">
                        <h5 className="coins">100</h5>
                        </div>
                        </span>
                     </label>
                     </div>
                     <div className="dem1">
                     <label className="containers">
                 <input type="radio" onChange={this.handleChange} value = "2"  name="radio"/>
                  <span className="checkmark" >
                      <div className="selecticon">
                      <img src="assets/images/icon.svg" className="icon1" />
                      </div>
                      <div className="selecticon">
                        <h5 className="coins">100</h5>
                        </div>
                        </span>
                        </label>
                        </div>
                        </div>    
                                  
        
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                <div className="dibutton">
                                <Button type="submit" className="butlog">
                                Открыть
                                    </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                        
                    </div>

                

            </div>
        );
    }
}

export default Roulette;