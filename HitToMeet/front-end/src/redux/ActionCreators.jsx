import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import {Redirect } from 'react-router-dom';




export const addAccount = (account) => ({
    type: ActionTypes.ACCOUNT_CREATE,
    payload: account
});
export const Lodins = (account) => ({
    type: ActionTypes.LOGIN,
    payload: account
});

export const createAccount = (Email, UserName, Password) => (dispatch) => {
    const newAccount = {
        Email: Email,
        Password: Password,
        UserName: UserName
    }
    
    return fetch(baseUrl + 'register', {
        method: 'POST',
        body: JSON.stringify(newAccount),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                alert('Поздравляю вы успешно зарегистрированы.');
                
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addAccount(response)))
        .then((data) => {
            console.log(data)
           /* alert(data);*/
        })
        .catch(error => {
            console.log('Post account ', error.message);
            alert('Your account could not be posted\nError: ' + error.message);
            })
};




export const Login = (Email, Password) => (dispatch) => {
    const addLogin = {
        Email: Email,
        Password: Password
    }
    
    return fetch(baseUrl + 'login', {
        method: 'POST',
        body: JSON.stringify(addLogin),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                alert('Поздравляю вы успешно зашли в свой профиль.');
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(Lodins(response)))
        .then(response => {
            document.cookie = "refreshToken=" + response.payload.refreshToken;
            document.cookie = "token=" + response.payload.token;
        })
        .catch(error => {
            console.log('Post account ', error.message);
            alert('Your account could not be posted\nError: ' + error.message);
            })
};