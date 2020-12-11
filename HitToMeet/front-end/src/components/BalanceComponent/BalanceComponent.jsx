import React, { Component } from 'react';
import { Row, Col, Button, Form } from 'reactstrap';
import style from "./Balance.module.css";
import { baseUrl, getCookie } from '../baseUrl';

class Balance extends Component {

    constructor(props) {
        super(props);

        
        this.state = {
            currentValue: 70
        }
    }

    changeValue(value) {
        this.setState({
            currentValue: value
        })
    }
    handleSubmit(){
        console.log(this.state.currentValue);
        const Pay = {
            Amount: this.state.currentValue,
            Currency: "UAH",
            Description: "Please it works",
            Order_Id: "10"
        }

        console.log(JSON.stringify(Pay));
         
            fetch(baseUrl + "liqPay", {
                method: 'POST',
                body: Pay,
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                credentials: 'same-origin'
            })
                .then(response => response.json())
                .then(
                    (response) => {
                       console.log(response);
                    },
                    (error) => {
                        
                        alert('\nError: ' + error);
                    }
                )
                

            
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center mt-5 mb-5">Пополнить баланс</h3>
                        <Form className="mt-5 mb-5" >
                            <Row className="form-group mt-5">
                                <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
                                    <Button className={style.paybtn} onClick={(evt) => this.changeValue(evt.target.value)} value="35">
                                        <img width="20" src="assets/images/icon.svg"></img> 100
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="form-group mt-1">
                                <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
                                    <Button className={style.paybtn} onClick={(evt) => this.changeValue(evt.target.value)} value="70">
                                        <img width="20" src="assets/images/icon.svg"></img> 250
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="form-group mt-1">
                                <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
                                    <Button className={style.paybtn} onClick={(evt) => this.changeValue(evt.target.value)} value="120">
                                        <img width="20" src="assets/images/icon.svg"></img> 500
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="form-group mt-5 mb-5">
                                <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
                                    <p>Стоимость: {this.state.currentValue}₴</p>
                                </Col>
                            </Row>
                            <Row className="form-group mt-1">
                                <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
                                    <Button color="primary" type="submit" className={style.primarywidth} onClick={() => this.handleSubmit()}>
                                        Пополнить
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Balance;