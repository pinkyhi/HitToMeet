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
        if (this.state.index != this.state.questions.length && this.state.currentValue) {
            this.setState((state, props) => ({
                summaryValue: parseInt(state.summaryValue) + parseInt(state.currentValue),
                currentValue: 0,
                index: parseInt(state.index) + 1
            }));
        } else if (!this.state.currentValue){
            alert("Выберите вариант ответа")
        }
    }

    componentDidMount() {
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