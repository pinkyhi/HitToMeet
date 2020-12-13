import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Col } from 'reactstrap';
import UserIcon from '../UserIconComponent';
import { baseUrl, getCookie } from '../baseUrl';
import style from './Header.module.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            username: null,
            userSkin: "",
            stars: null,
            diamonds: null,
            isLoaded: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
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
                            username: response.userName,
                            userSkin: "assets/skin/" + userImg,
                            stars: response.pointsBalance,
                            diamonds: response.balance,
                            isLoaded: true
                        });
                        if (this.state.userSkin == "assets/skin/") {
                            this.setState({
                                userSkin: "assets/images/user-avatar1.png"
                            });
                        }
                        document.cookie = "userId=" + response.id;
                    },
                    (error) => {
                        console.log('Get account information', error);
                        alert('Your account information could not be gotten\nError: ' + error);
                    }
                )
        }
    }

    render() {
        if (getCookie('JwtClaimId') && this.state.isLoaded) {
            return (
                <>
                    <Navbar dark className="header-nav" expand="lg">
                        <div className="container">
                            <NavbarBrand href="/chatlist">
                                <img src="assets/images/logo.png" width="300" height="52"></img>
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} className="navbar-toggler-right"></NavbarToggler>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav className="mx-auto" navbar>
                                    <NavItem className="mr-5 mt-4">
                                        <NavLink to="/" className={style.navlink_custom}>Главная</NavLink>
                                    </NavItem>
                                    <NavItem className="mr-5 mt-4">
                                        <NavLink to="/" className={style.navlink_custom}>О нас</NavLink>
                                    </NavItem>
                                    <NavItem className="mr-5 mt-4">
                                        <NavLink to="/" className={style.navlink_custom}>Помощь</NavLink>
                                    </NavItem>
                                    <NavItem className="ml-md-5 mt-1">
                                        <Col md={12} className="text-center">
                                            <p>{this.state.username}</p>
                                            <p>
                                                <img src="assets/images/star.svg" width="20" className="mb-1"></img> {this.state.stars}
                                                <img src="assets/images/icon.svg" width="16" className="mb-1 ml-3"></img> {this.state.diamonds}
                                            </p>
                                        </Col>
                                    </NavItem>
                                    <NavItem className="mt-2 ml-lg-0 ml-sm-5 text-center">
                                        <Col md={12}>
                                            <img src={ this.state.userSkin } width="56"></img>
                                        </Col>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                </>
            );
        } else {
            return (
                <>
                    <Navbar dark className="header-nav" expand="lg">
                        <div className="container">
                            <NavbarBrand href="/" className="text-center mx-auto">
                                <img src="assets/images/logo.png" width="300" height="52"></img>
                            </NavbarBrand>
                        </div>
                    </Navbar>
                </>
            );
        }
    }
}

export default Header;