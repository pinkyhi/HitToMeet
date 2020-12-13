import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { baseUrl, getCookie } from '../baseUrl';
import style from './ChatList.module.css';
import { withRouter } from 'react-router-dom';

class ChatList extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    ChatBlock() {

    }

    componentDidMount() {
        if (!getCookie('JwtClaimId')) {
            this.props.history.push('/login');

            
        } else {
            fetch(baseUrl + "chats/", {
                method: "GET",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Authorization': `Bearer ${getCookie("JwtClaimId")}`,
                    'Content-Type': 'application/json; charset=UTF-8'
                },
            })
        }
    }

    handleSubmit() {
        this.props.history.push("/chat/1");
    }


    render() {
        return (
            <div className="container">
                <h3 className="text-center mt-5 mb-5">Сообщения</h3>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Row onClick={() => this.handleSubmit()}>
                        <div className={style.chatBlock} >
                            <Row>
                                <Col md={1} className="text-center mt-auto mb-auto mr-3 ml-1">
                                    <img src="assets/skin/1 рыба/fishAnimal.png" width="60" ></img>
                                </Col>
                                <Col md={9} className="mt-auto mb-auto">
                                    <span className={style.userNameAndDateTime}>Lol07 • 14:53</span><br></br>
                                    <span className={style.lastMessage}>What are you doing bro?</span>
                                </Col>
                                <Col sm="12" md={1} className="text-center mt-auto mb-auto ml-auto mr-3">
                                    <div className={style.messageNotification}>
                                        <p>1</p>
                                    </div>
                                </Col>
                            </Row>

                        </div>

                    </Row>
                </Col>
            </div>
        );
    }
}

export default withRouter(ChatList);