import React, { Component } from 'react';
import { Label, Col, Row, Button } from 'reactstrap';

import l from './Quiz.module.css';

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
      }
  
      onSubmit(event){
        if(this.state.gender){
          alert(`${this.state.gender}`);
        event.preventDefault();
        }else
        alert(`Выберите вариант!!!!!!!!!!!!!`);
        
      }
  

      state = {
        gender:""
      };
  
      handleChange=(e)=>{
          this.setState({
            gender: e.target.value
          })
      }
  
    render() {
      return (
        <div className="container">
        <div className={l.quiz}>
      <h2 className={l.Title}>Вопрос #1</h2>
        <form onSubmit={this.onSubmit}>
          <h4 className = {l.question}>Пройдите тест для  определения вашего тотемного животного</h4>
          
            <div className={l.demail}>
            <label className={l.containers}>
                 <input type="radio" onChange={this.handleChange} value = "1"  name="radio"/>
                  <span className={l.checkmark}>ВАРИАНТ ОДИН</span>
            </label>
            </div>
     
            <div className={l.dem}>
            <label className={l.containers}>1
                 <input type="radio" onChange={this.handleChange} value = "2"  name="radio"/>
                  <span className={l.checkmark}>ВАРИАНТ ДВА</span>
            </label>
            </div>
             <div className={l.dem}>
            <label className={l.containers}>1
                 <input type="radio" onChange={this.handleChange} value = "2"  name="radio"/>
                  <span className={l.checkmark}>ВАРИАНТ ДВА</span>
            </label>
            </div>
            <div className={l.dem}>
            <label className={l.containers}>1
                 <input type="radio"  onChange={this.handleChange} value = "4"  name="radio"/>
                  <span className={l.checkmark}>ВАРИАНТ ЧЕТЫРИ</span>
            </label>
            </div>
            
            
            <div className={l.dibutton}>
            <Button type="submit" className={l.butlog}>
                                        Далее
                                    </Button>
          
          </div>
        </form>
        </div>
        </div>
      );
    }
  }
  export default Quiz