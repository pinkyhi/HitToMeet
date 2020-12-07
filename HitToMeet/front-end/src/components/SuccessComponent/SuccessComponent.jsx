import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { baseUrl, getCookie } from '../baseUrl';
import style from './Success.module.css';

class Success extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userSkin: null,
            animal: null,
            description: null,
            isLoaded: false
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
                        var userImg = "";
                        response.userSkins.forEach(element => {
                            if (element.skinStatus) {
                                userImg = element.skin.imgUrl;
                            }
                        });
                        this.setState({
                            animal: response.animal.title,
                            userSkin: "assets/skin/" + userImg,
                            description: response.animal.description,
                            isLoaded: true
                        });
                        if (this.state.userSkin == "assets/skin/") {
                            this.setState({
                                userSkin: "assets/images/user-avatar1.png"
                            });
                        }
                    },
                    (error) => {
                        console.log('Get account information', error);
                        alert('Your account information could not be gotten\nError: ' + error);
                    }
                )
        }
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="container">
                    <Col md={12} className="text-center mt-5">
                        <h3 className="mt-5">Результат:</h3>
                        <p className="mt-3">Ваше тотемное животное: {this.state.animal}</p>
                        <p>{this.state.description}</p>
                        <img src={this.state.userSkin} className={style.resultImage} width="30%"></img>
                    </Col>
                </div>
            );
        } else {
            return (
                <div className="container mt-5">
                    <Col md={{size: 6, offset: 3}} className="text-center">
                        <p>Загрузка</p>
                    </Col>
                </div>
            );
        }
    }
}

export default Success;