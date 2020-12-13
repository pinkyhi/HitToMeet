import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { baseUrl, getCookie } from '../baseUrl';
import style from './Chat.module.css';
import { Link, withRouter } from 'react-router-dom';
import { HubConnectionBuilder } from '@microsoft/signalr';


class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            messages: [],
            counter: 0
        }
    }

    ChatBlock() {

    }

    componentDidMount() {
        if (!getCookie('JwtClaimId')) {
            this.props.history.push('/login');
        } else {
            fetch(baseUrl + "chats/" + this.props.match.params.id, {
                method: "GET",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Authorization': `Bearer ${getCookie("JwtClaimId")}`,
                    'Content-Type': 'application/json; charset=UTF-8'
                },
            })
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        messages: response.messages
                    })
                })
            this.setState({
                isLoaded: true
            });
        }
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (!e.target.value.replace(/\s/g, '').length) {
                console.log('string only contains whitespace (ie. spaces, tabs or line breaks)');
            } else {
                if (this.state.isLoaded) {
                    const SendMessageRequest = {
                        Text: e.target.value
                    }

                    fetch(baseUrl + "chats/" + this.props.match.params.id, {
                        method: "POST",
                        body: JSON.stringify(SendMessageRequest),
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Authorization': `Bearer ${getCookie("JwtClaimId")}`,
                            'Content-Type': 'application/json; charset=UTF-8'
                        },
                    })
                    .then(response => {
                        if (response.ok) {
                            
                        }
                    })

                }
            }
        }
    }

    renderMessages(messages) {
        return messages.map((message, index) => {
            return message.senderId != getCookie('userId') ?
                <Col sm="12" md={6}>
                    <div key={index}>
                        <div className={style.OtherText}>
                            <span className={style.UserMessage}>{message.text}</span>
                        </div>
                        <div>
                            <div>
                                <p className={style.textdata}>{message.date}</p>
                            </div>
                        </div>
                    </div>
                </Col>
                :
                <Col sm="12" md={6} offset-md={3} className="ml-auto">
                    <div>
                        <div className={style.UserText} key={index}>
                            <span className={style.UserMessage}>{message.text}</span>
                        </div>
                        <div >
                            <div>
                                <p className={style.textdata}>{message.date}</p>
                            </div>
                        </div>
                    </div>
                </Col>


        })
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="container">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Row >
                            <div className={style.info}>
                                <div className={style.back}>
                                    <Link to="/chatlist">
                                        <span className={style.iconBack}>
                                            <i class="far fa-chevron-left"></i>
                                        </span>
                                    </Link>
                                </div>
                                <div className={style.user} >
                                    <h4>Lol07</h4>
                                </div>
                                <div className={style.dots}>
                                    <span className={style.iconDots}>
                                        <i class="far fa-ellipsis-v"></i>
                                    </span>
                                </div>
                            </div>
                            <div className={style.Messages}>
                                {this.renderMessages(this.state.messages)}
                            </div>
                            <div className={style.SendMessage}>
                                <input
                                    id="message" name="message"
                                    className={style.inputmessage}
                                    type="text"
                                    placeholder="Написать сообщение..."
                                    autofocus
                                    onKeyDown={this._handleKeyDown}
                                >
                                </input>
                            </div>

                        </Row>
                    </Col>
                </div>
            );
        } else {
            return (
                <div className="container mt-5">
                    <Col md={{ size: 6, offset: 3 }} className="text-center">
                        <p className={style.errormsg}>{this.state.error}</p>
                    </Col>
                </div>
            );
        }
    }
}

export default withRouter(Chat);