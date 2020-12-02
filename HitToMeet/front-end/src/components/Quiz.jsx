import React, { Component } from 'react';
import { Label, Col, Row, Button } from 'reactstrap';

import l from './Quiz.module.css';



class Quiz extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLoad = this.handleLoad.bind(this);

        this.state = {
            questions: [{}],
            isLoading: true
        }
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    componentWillMount() {
        const promise1 = this.props.GetQuestion();

        promise1.then((value) => {
            this.setState({
                questions: value,
                isLoading: false
            })
        });
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad)
    }

    handleLoad() {
    }

    handleSubmit(event) {
        console.log(this.state.questions)
        event.preventDefault();
    }

    state = {
        gender: ""
    };

    handleChange = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="text-center">
                    <i className="fa fa-spinner fa-spin"></i>
                </div>
            );
        } else if (!this.state.isLoading) {

            return (
                <div className="container">
                    <div className={l.quiz}>
                        <h2 className={l.Title}></h2>
                        <form onSubmit={this.handleSubmit}>
                            <h4 className={l.question}>1. {this.state.questions[0].text}</h4>

                            <div className={l.demail}>
                                <label className={l.containers}>
<<<<<<< Updated upstream
                                    <input type="radio" onChange={this.handleChange} value="1" name="radio" />
=======
                                    <input type="radio" onChange={this.handleChange} value="1" name="question1" />
>>>>>>> Stashed changes
                                    <span className={l.checkmark}>{this.state.questions[0].answers[0].title}</span>
                                </label>
                            </div>

                            <div className={l.dem}>
                                <label className={l.containers}>1
<<<<<<< Updated upstream
                     <input type="radio" onChange={this.handleChange} value="2" name="radio" />
                                    <span className={l.checkmark}>{this.state.questions[0].answers[1].title}</span>
=======
                                    <input type="radio" onChange={this.handleChange} value="2" name="question1" />
                                    <span className={l.checkmark}>{this.state.questions[0].answers[1].title}</span>
                                </label>
                            </div>
                            <div className={l.dem}>
                                <label className={l.containers}>1
                                    <input type="radio" onChange={this.handleChange} value="2" name="question1" />
                                    <span className={l.checkmark}>{this.state.questions[0].answers[2].title}</span>
                                </label>
                            </div>

                            <h4 className={l.question}>2. {this.state.questions[1].text}</h4>

                            <div className={l.demail}>
                                <label className={l.containers}>
                                    <input type="radio" onChange={this.handleChange} value="1" name="question2" />
                                    <span className={l.checkmark}>{this.state.questions[1].answers[0].title}</span>
                                </label>
                            </div>

                            <div className={l.dem}>
                                <label className={l.containers}>1
                                    <input type="radio" onChange={this.handleChange} value="2" name="question2" />
                                    <span className={l.checkmark}>{this.state.questions[1].answers[1].title}</span>
                                </label>
                            </div>
                            <div className={l.dem}>
                                <label className={l.containers}>1
                                    <input type="radio" onChange={this.handleChange} value="2" name="question2" />
                                    <span className={l.checkmark}>{this.state.questions[1].answers[2].title}</span>
                                </label>
                            </div>

                            <h4 className={l.question}>3. {this.state.questions[2].text}</h4>

                            <div className={l.demail}>
                                <label className={l.containers}>
                                    <input type="radio" onChange={this.handleChange} value="1" name="question" />
                                    <span className={l.checkmark}>{this.state.questions[2].answers[0].title}</span>
                                </label>
                            </div>

                            <div className={l.dem}>
                                <label className={l.containers}>1
                                    <input type="radio" onChange={this.handleChange} value="2" name="question3" />
                                    <span className={l.checkmark}>{this.state.questions[2].answers[1].title}</span>
                                </label>
                            </div>
                            <div className={l.dem}>
                                <label className={l.containers}>1
                                    <input type="radio" onChange={this.handleChange} value="2" name="question3" />
                                    <span className={l.checkmark}>{this.state.questions[2].answers[2].title}</span>
                                </label>
                            </div>




                            <h4 className={l.question}>4. {this.state.questions[3].text}</h4>

                            <div className={l.demail}>
                                <label className={l.containers}>
                                    <input type="radio" onChange={this.handleChange} value="1" name="question4" />
                                    <span className={l.checkmark}>{this.state.questions[3].answers[0].title}</span>
                                </label>
                            </div>

                            <div className={l.dem}>
                                <label className={l.containers}>1
        <input type="radio" onChange={this.handleChange} value="2" name="question4" />
                                    <span className={l.checkmark}>{this.state.questions[3].answers[1].title}</span>
>>>>>>> Stashed changes
                                </label>
                            </div>
                            <div className={l.dem}>
                                <label className={l.containers}>1
<<<<<<< Updated upstream
                     <input type="radio" onChange={this.handleChange} value="2" name="radio" />
                                    <span className={l.checkmark}>{this.state.questions[0].answers[2].title}</span>
=======
        <input type="radio" onChange={this.handleChange} value="2" name="question4" />
                                    <span className={l.checkmark}>{this.state.questions[3].answers[2].title}</span>
>>>>>>> Stashed changes
                                </label>
                            </div>

                            <h4 className={l.question}>5. {this.state.questions[4].text}</h4>

                            <div className={l.demail}>
                                <label className={l.containers}>
                                    <input type="radio" onChange={this.handleChange} value="1" name="question5" />
                                    <span className={l.checkmark}>{this.state.questions[4].answers[0].title}</span>
                                </label>
                            </div>

                            <div className={l.dem}>
                                <label className={l.containers}>1
        <input type="radio" onChange={this.handleChange} value="2" name="question5" />
                                    <span className={l.checkmark}>{this.state.questions[4].answers[1].title}</span>
                                </label>
                            </div>
                            <div className={l.dem}>
                                <label className={l.containers}>1
        <input type="radio" onChange={this.handleChange} value="2" name="question5" />
                                    <span className={l.checkmark}>{this.state.questions[4].answers[2].title}</span>
                                </label>
                            </div>

                            <h4 className={l.question}>6. {this.state.questions[5].text}</h4>

                            <div className={l.demail}>
                                <label className={l.containers}>
                                    <input type="radio" onChange={this.handleChange} value="1" name="question6" />
                                    <span className={l.checkmark}>{this.state.questions[5].answers[0].title}</span>
                                </label>
                            </div>

                            <div className={l.dem}>
                                <label className={l.containers}>1
        <input type="radio" onChange={this.handleChange} value="2" name="question6" />
                                    <span className={l.checkmark}>{this.state.questions[5].answers[1].title}</span>
                                </label>
                            </div>
                            <div className={l.dem}>
                                <label className={l.containers}>1
        <input type="radio" onChange={this.handleChange} value="2" name="question6" />
                                    <span className={l.checkmark}>{this.state.questions[5].answers[2].title}</span>
                                </label>
                            </div>






                            <h4 className={l.question}>7. {this.state.questions[6].text}</h4>

                            <div className={l.demail}>
                                <label className={l.containers}>
                                    <input type="radio" onChange={this.handleChange} value="1" name="question7" />
                                    <span className={l.checkmark}>{this.state.questions[6].answers[0].title}</span>
                                </label>
                            </div>

                            <div className={l.dem}>
                                <label className={l.containers}>1
        <input type="radio" onChange={this.handleChange} value="2" name="question7" />
                                    <span className={l.checkmark}>{this.state.questions[6].answers[1].title}</span>
                                </label>
                            </div>
                            <div className={l.dem}>
                                <label className={l.containers}>1
        <input type="radio" onChange={this.handleChange} value="2" name="question7" />
                                    <span className={l.checkmark}>{this.state.questions[6].answers[2].title}</span>
                                </label>
                            </div>

                            <h4 className={l.question}>8. {this.state.questions[7].text}</h4>

                            <div className={l.demail}>
                                <label className={l.containers}>
                                    <input type="radio" onChange={this.handleChange} value="1" name="question8" />
                                    <span className={l.checkmark}>{this.state.questions[7].answers[0].title}</span>
                                </label>
                            </div>

                            <div className={l.dem}>
                                <label className={l.containers}>1
        <input type="radio" onChange={this.handleChange} value="2" name="question8" />
                                    <span className={l.checkmark}>{this.state.questions[7].answers[1].title}</span>
                                </label>
                            </div>
                            <div className={l.dem}>
                                <label className={l.containers}>1
        <input type="radio" onChange={this.handleChange} value="2" name="question8" />
                                    <span className={l.checkmark}>{this.state.questions[7].answers[2].title}</span>
                                </label>
                            </div>

                            <h4 className={l.question}>9. {this.state.questions[8].text}</h4>

                            <div className={l.demail}>
                                <label className={l.containers}>
                                    <input type="radio" onChange={this.handleChange} value="1" name="question9" />
                                    <span className={l.checkmark}>{this.state.questions[8].answers[0].title}</span>
                                </label>
                            </div>

                            <div className={l.dem}>
                                <label className={l.containers}>1
        <input type="radio" onChange={this.handleChange} value="2" name="question9" />
                                    <span className={l.checkmark}>{this.state.questions[8].answers[1].title}</span>
                                </label>
                            </div>
                            <div className={l.dem}>
                                <label className={l.containers}>1
        <input type="radio" onChange={this.handleChange} value="2" name="question9" />
                                    <span className={l.checkmark}>{this.state.questions[8].answers[2].title}</span>
                                </label>
                            </div>




                            <h4 className={l.question}>10. {this.state.questions[9].text}</h4>

                            <div className={l.demail}>
                                <label className={l.containers}>
                                    <input type="radio" onChange={this.handleChange} value="1" name="question10" />
                                    <span className={l.checkmark}>{this.state.questions[9].answers[0].title}</span>
                                </label>
                            </div>

                            <div className={l.dem}>
                                <label className={l.containers}>1
<input type="radio" onChange={this.handleChange} value="2" name="question10" />
                                    <span className={l.checkmark}>{this.state.questions[9].answers[1].title}</span>
                                </label>
                            </div>
                            <div className={l.dem}>
                                <label className={l.containers}>1
<input type="radio" onChange={this.handleChange} value="2" name="question10" />
                                    <span className={l.checkmark}>{this.state.questions[9].answers[2].title}</span>
                                </label>
                            </div>

                            <h4 className={l.question}>11. {this.state.questions[10].text}</h4>

                            <div className={l.demail}>
                                <label className={l.containers}>
                                    <input type="radio" onChange={this.handleChange} value="1" name="question11" />
                                    <span className={l.checkmark}>{this.state.questions[10].answers[0].title}</span>
                                </label>
                            </div>

                            <div className={l.dem}>
                                <label className={l.containers}>1
<input type="radio" onChange={this.handleChange} value="2" name="question11" />
                                    <span className={l.checkmark}>{this.state.questions[10].answers[1].title}</span>
                                </label>
                            </div>
                            <div className={l.dem}>
                                <label className={l.containers}>1
<input type="radio" onChange={this.handleChange} value="2" name="question11" />
                                    <span className={l.checkmark}>{this.state.questions[10].answers[2].title}</span>
                                </label>
                            </div>

                            <h4 className={l.question}>12. {this.state.questions[11].text}</h4>

                            <div className={l.demail}>
                                <label className={l.containers}>
                                    <input type="radio" onChange={this.handleChange} value="1" name="question12" />
                                    <span className={l.checkmark}>{this.state.questions[11].answers[0].title}</span>
                                </label>
                            </div>

                            <div className={l.dem}>
                                <label className={l.containers}>1
<input type="radio" onChange={this.handleChange} value="2" name="question12" />
                                    <span className={l.checkmark}>{this.state.questions[11].answers[1].title}</span>
                                </label>
                            </div>
                            <div className={l.dem}>
                                <label className={l.containers}>1
<input type="radio" onChange={this.handleChange} value="2" name="question12" />
                                    <span className={l.checkmark}>{this.state.questions[11].answers[2].title}</span>
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
}
export default Quiz