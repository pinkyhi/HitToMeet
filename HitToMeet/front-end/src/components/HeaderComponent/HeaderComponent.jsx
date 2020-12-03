import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Col } from 'reactstrap';
import UserIcon from '../UserIconComponent';
import { getCookie } from '../baseUrl';
import style from './Header.module.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    componentDidMount() {

    }

    render() {
        if (getCookie('JwtClaimId')) {
            return (
                <>
                    <Navbar dark className="header-nav" expand="lg">
                        <div className="container">
                            <NavbarBrand href="/">
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
                                    <NavItem className="ml-5 mt-1">
                                        <Col md={12} className="text-center">
                                            <p>Никнейм</p>
                                            <p>
                                                <img src="assets/images/star.svg" width="20" className="mb-1"></img> 100
                                                <img src="assets/images/icon.svg" width="16" className="mb-1 ml-3"></img> 100
                                            </p>
                                        </Col>
                                    </NavItem>
                                    <NavItem className="mt-2 ml-lg-0 ml-sm-5 text-center">
                                        <Col md={12}>
                                            <img src="assets/images/user-avatar1.png" width="56"></img>
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