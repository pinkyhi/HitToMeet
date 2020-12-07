import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Col } from 'reactstrap';
import { getCookie } from '../baseUrl';
import style from './Complete.module.css';

class Complete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        }

        this.toTheQuiz = this.toTheQuiz.bind(this);
    }

    toTheQuiz(event) {
        if (this.state.isLoaded) {
            this.props.history.push("/quiz");
        }
        event.preventDefault();
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="container">
                    <Col md={12} className="text-center">
                        <p className={style.completeChar}>✓</p>
                        <h4 className="mt-5">Готово!</h4>
                        <h4>Вы создали аккаунт</h4>
                        <Col md={{ size: 4, offset: 4 }}>
                            <p className="mt-3">Пройдите тест для определения вашего тотемного животного</p>
                            <Button onClick={(event) => this.toTheQuiz(event)} className={style.custom_btn}>
                                Пройти
                        </Button>
                        </Col>
                    </Col>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <p>Загрузка...</p>
                </div>
            );
        }
    }
}

export default withRouter(Complete);