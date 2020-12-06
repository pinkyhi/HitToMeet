import React, { Component } from 'react';
import { Row, Col, Button, Form } from 'reactstrap';
import style from "./Balance.module.css";

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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center mt-5 mb-5">Пополнить баланс</h3>
                        <Form className="mt-5 mb-5">
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
                                    <Button color="primary" type="submit" className={style.primarywidth}>
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