import { Component } from 'react';
import { Label, Col, Row, Button } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { getCookie } from '../baseUrl';



class NavBar extends Component {
    constructor(props) {
        super(props);
        
    }
     
     
     

    render() {
      

        if (window.location.pathname == "/login"|| window.location.pathname == "/registration"|| window.location.pathname == "/quiz"|| window.location.pathname == "/successreg") {
            return (
                <>
                    <Navbar dark className="header-nav" expand="lg" >
                        
                    </Navbar>
                </>
            );
        } else {
            return (
                
                <>
                   
                    <Navbar dark className="NavBar" >
                                    <NavItem className ="iconNav">
                                        <NavLink to="#" >
                                        <span className = "iconcolor">
                                             <i class="far fa-comment-alt"></i>
                                             </span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className ="iconNav">
                                    <NavLink to="/roulette"  activeClassName = {'activecolor'}>
                                        <span className = "iconcolor" >
                                        <i class="far fa-dharmachakra"></i>
                                             </span>
                                             </NavLink>
                                    </NavItem>
                                    <NavItem className ="iconNav">
                                    <NavLink to="/personalarea" >
                                        <span className = "iconcolor">
                                        <i class="far fa-user-circle"></i>
                                             </span>
                                             </NavLink>
                                    </NavItem>
                                    <NavItem className ="iconNav">
                                    <NavLink to="/balance" > 
                                    <span className = "iconcolor">
                                    <i class="far fa-credit-card"></i>
                                             </span>
                                    </NavLink>
                                    </NavItem>
                                    <NavItem className ="iconNav">
                                    <NavLink to="#" >
                                        <span className = "iconcolor">
                                        <i class="far fa-cog"></i>
                                             </span>
                                             </NavLink>
                                    </NavItem>
                                
                    </Navbar>
                </>
            );
        }
    }
}

export default NavBar;