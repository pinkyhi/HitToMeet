import { Component } from 'react';
import { Label, Col, Row, Button } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { Link, withRouter } from 'react-router-dom';
import l from './LogIn.module.css';
import { baseUrl, getCookie } from '../baseUrl';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (getCookie('JwtClaimId')) {
            this.props.history.push('/chatlist');
        }
    }

    handleSubmit(value) {
        const newAccount = {
            Email: value.email,
            Password: value.password
        }

        if (getCookie('JwtClaimId')) {
            window.location.href = '/chatlist';
            return;
        }


        fetch(baseUrl + "identity/Login", {
            method: 'POST',
            body: JSON.stringify(newAccount),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(
                (response) => {
                    document.cookie = "refreshToken=" + response.refreshToken;
                    document.cookie = "JwtClaimId=" + response.token;
                    window.location.href = "/quiz";
                },
                (error) => {
                    console.log('Post account ', error);
                    alert('Your account could not be posted\nError: ' + error);
                }
            )
    }

    render() {
        return (
            <div className="container">
                <div className={l.login} >
                    <h2 className={l.Title}>Вход</h2>
                    <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className={l.demail}>

                            <Label htmlFor="email" md={2}></Label>
                            <Control.text model=".email" id="email" name="email"
                                placeholder="Введите email"
                                className={l.placeinput}
                                validators={{
                                    required, validEmail
                                }}
                            />

                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                            />
                        </Row>
                        <Row className={l.demail1}>

                            <Label htmlFor="password" md={2}></Label>
                            <Control.text model=".password" id="password" name="password"
                                placeholder="Введите пароль" type="password"
                                className={l.placeinput}
                                validators={{
                                    required, minLength: minLength(4), maxLength: maxLength(15)
                                }}
                            />

                            <Errors
                                className="text-danger"
                                model=".password"
                                show="touched"
                            />
                        </Row>
                        <Row >
                            <Col md={{ size: 10, offset: 0 }}>
                                <div className={l.dibutton}>
                                    <Button type="submit" className={l.butlog}>
                                        Вход
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                    <Link to="/registration">
                        <div className={l.dibuttonsig}>
                            <Button className={l.butsig} >
                                Регистрация
                        </Button>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(LogIn);