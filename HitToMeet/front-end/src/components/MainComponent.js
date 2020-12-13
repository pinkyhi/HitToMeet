import React, { Component } from 'react';
import Header from './HeaderComponent/HeaderComponent';
import NavBar from './NavBarComponent/NavBarComponent';
import LogIn from './LoginComponent/LoginComponent';
import Registration from './RegistrationComponent';
import Quiz from './QuizComponent/QuizComponent';
import Footer from './FooterComponent';
import Success from './SuccessComponent/SuccessComponent';
import PersonalArea from './PersonalAreaComponent/PersonalAreaComponent';
import Roulette from './RouletteComponent';
import Balance from './BalanceComponent/BalanceComponent';
import ChatList from './ChatListComponent/ChatListComponent';
import Chat from './ChatComponent/ChatComponent';
import Complete from './CompleteComponent/CompleteComponent';
import Game from './GameComponent/Game';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createAccount, Login, GetQuestion, RefreshToken } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = (dispatch) => ({
    createAccount: (Email, Password, UserName) => dispatch(createAccount(Email, Password, UserName)),
    Login: (Email, Password) => dispatch(Login(Email, Password)),
    GetQuestion: () => dispatch(GetQuestion()),
    RefreshToken: (Token, RefreshToken) => dispatch(RefreshToken(Token, RefreshToken))
});

class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <NavBar></NavBar>
                <Switch>
                    <Route path="/home"></Route>
                    <Route path="/login" component={() => <LogIn Login={this.props.Login}></LogIn>}></Route>
                    <Route exact path="/registration" component={() => <Registration createAccount={this.props.createAccount}></Registration>}></Route>
                    <Route path="/success" component={Success}></Route>
                    <Route path="/quiz" component={Quiz}></Route>
                    <Route path="/profile" component={PersonalArea}></Route>
                    <Route path="/roulette" component={Roulette}></Route>
                    <Route path="/balance" component={Balance}></Route>
                    <Route path="/chatlist" component={ChatList}></Route>
                    <Route path="/chat/:id" component={Chat}></Route>
                    <Route path="/complete" component={Complete}></Route>
                    <Route path="/game" component={Game}></Route>
                    <Redirect to="/login"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));