import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import style from './Quiz.module.css';
import { baseUrl } from '../baseUrl';

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentValue: 0,
            summaryValue: 0,
            isLoaded: false,
            questions: [],
            index: 0,
            error: null
        }

        this.changeCurrentValue = this.changeCurrentValue.bind(this);
        this.changeSummaryValue = this.changeSummaryValue.bind(this);
    }

    changeCurrentValue(value) {
        this.setState({
            currentValue: value
        });
    }

    changeSummaryValue() {
        if (this.state.index != this.state.questions.length - 1 && this.state.currentValue) {
            this.setState((state, props) => ({
                summaryValue: parseInt(state.summaryValue) + parseInt(state.currentValue),
                currentValue: 0,
                index: parseInt(state.index) + 1
            }));
        } else if (this.state.index == this.state.questions.length - 1) {
            const points = this.state.summaryValue;
            var animalId = 0;
            if (points == 12) {
                animalId = 1;
            } else if (points == 13 || points == 14) {
                animalId = 2;
            } else if (points == 15 || points == 16) {
                animalId = 4;
            } else if (points == 17 || points == 18) {
                animalId = 5;
            } else if (points == 19 || points == 20) {
                animalId = 6;
            } else if (points == 21 || points == 22) {
                animalId = 7;
            } else if (points == 23 || points == 24) {
                animalId = 8;
            } else if (points == 25 || points == 26) {
                animalId = 9;
            } else if (points == 27 || points == 28) {
                animalId = 10;
            } else if (points == 29 || points == 30) {
                animalId = 11;
            } else if (points == 31 || points == 32) {
                animalId = 12;
            } else if (points == 33 || points == 34) {
                animalId = 13;
            } else if (points == 35 || points == 36) {
                animalId = 14;
            } else {
                return;
            }

            if (animalId > 0) {
                const Result = {
                    id: animalId
                }
                fetch(baseUrl + "quiz", {
                    method: "PUT",
                    body: JSON.stringify(Result),
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Authorization': `Bearer ${this.getCookie("JwtClaimId")}`,
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    credentials: 'same-origin'
                })
            }

        } else if (!this.state.currentValue) {
            alert("Выберите вариант ответа")
        }
    }

    componentDidMount() {
        if (this.getCookie("JwtClaimId") == null) {
            window.location.href="/login";
        }

        fetch(baseUrl + "quiz", {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Authorization': `Bearer ${this.getCookie("JwtClaimId")}`,
                'Content-Type': 'application/json; charset=UTF-8'
            },
            credentials: 'same-origin'
        })
            .then(result => result.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        questions: result.questions
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <div className="text-center">
                    <i className="fa fa-spinner fa-spin"></i>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <h4 className="mt-5">Вопрос #{this.state.index + 1}</h4>
                            <div className="col-4 offset-4 mt-3 mb-2">
                                <p>{this.state.questions[this.state.index].text}</p>
                            </div>
                            <Col md={{ size: 4, offset: 4 }}>
                                <Button
                                    onClick={(event) => this.changeCurrentValue(event.target.value)}
                                    value={this.state.questions[this.state.index].answers[0].points}
                                    className={style.custom_btn}>
                                    {this.state.questions[this.state.index].answers[0].title}
                                </Button>
                            </Col>
                            <Col md={{ size: 4, offset: 4 }}>
                                <Button
                                    onClick={(event) => this.changeCurrentValue(event.target.value)}
                                    value={this.state.questions[this.state.index].answers[1].points}
                                    className={style.custom_btn}>
                                    {this.state.questions[this.state.index].answers[1].title}
                                </Button>
                            </Col>
                            <Col md={{ size: 4, offset: 4 }}>
                                <Button
                                    onClick={(event) => this.changeCurrentValue(event.target.value)}
                                    value={this.state.questions[this.state.index].answers[2].points}
                                    className={style.custom_btn}>
                                    {this.state.questions[this.state.index].answers[2].title}
                                </Button>
                            </Col>
                            <Col md={{ size: 4, offset: 4 }}>
                                <Button
                                    className={style.custom_btn_next}
                                    value={this.state.currentValue}
                                    onClick={(event) => this.changeSummaryValue(event.target.value)}>
                                    Далее
                                </Button>
                            </Col>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default Quiz;