import React, { Component } from 'react';
import { Form, Input, Row, Col, Label, Button } from 'reactstrap';
import { baseUrl, getCookie } from '../baseUrl';
import style from './Personal.module.css';

class PersonalArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            username: null,
            email: null,
            description: null,
            sex: null,
            userSkins: []
        }
    }

    componentDidMount() {
        if (getCookie('JwtClaimId')) {
            fetch(baseUrl + "profile", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Authorization': `Bearer ${getCookie("JwtClaimId")}`,
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                credentials: 'same-origin'
            })
                .then(response => response.json())
                .then(
                    (response) => {
                        this.setState({
                            username: response.userName,
                            userSkins: response.userSkins,
                            email: response.email,
                            description: response.description,
                            sex: response.sex,
                            isLoaded: true
                        });
                    },
                    (error) => {
                        console.log('Get account information', error);
                        alert('Your account information could not be gotten\nError: ' + error);
                    }
                )
        }
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center mt-5 mb-5">Личный кабинет</h3>
                <Form className="mt-5 mb-5">
                    <Row className="form-group mt-5">
                        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
                            <Input
                                type="text"
                                className={style.input_custom}
                                name="username"
                                placeholder="Введите никнейм"
                                value={this.state.username}>
                            </Input>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
                            <Input
                                type="text"
                                className={style.input_custom}
                                name="email"
                                placeholder="Введите адрес электронной почты"
                                value={this.state.email}>
                            </Input>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
                            <Input
                                type="text"
                                className={style.input_custom}
                                name="description"
                                placeholder="Введите описание вашего профиля"
                                value={this.state.description}>
                            </Input>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
                            <Row>
                                <Col sm="12" md={{ size: 5 }}>
                                    <Button value={1} className="ml-auto">
                                        МУЖСКОЙ
                                    </Button>
                                </Col>
                                <Col sm="12" md={{ size: 1 }}></Col>
                                <Col sm="12" md={{ size: 5 }}>
                                    <Button value={1}>
                                        МУЖСКОЙ
                                    </Button>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default PersonalArea;