import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { getCookie } from '../baseUrl';
import style from './Chat.module.css';
import { Link, withRouter } from 'react-router-dom';

class Chat extends Component {
    constructor(props) {
        super(props);
    }

    ChatBlock() {

    }

    componentDidMount() {
        if (!getCookie('JwtClaimId')) {
            this.props.history.push('/login');
        }
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          alert(e.target.value);
        }
    }


    render() {
        return (
            <div className="container">

                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Row >
                        <div className={style.info}>
                            <div className={style.back}>
                            <Link to="/chatlist"> 
                        <span className = {style.iconBack}>
                        <i class="far fa-chevron-left"></i>
                        </span>
                        </Link>
                        </div>
                        <div  className={style.user} >
                        <h4>Lol07</h4>
                        </div>
                        <div className={style.dots}>
                        <span className = {style.iconDots}>
                        <i class="far fa-ellipsis-v"></i>
                        </span>
                        </div>
                        </div>
                        <div className={style.Messages}>
                        <div className={style.OtherMess}>
                              <div  className={style.OtherText}>
                                <p  className={style.OtherTextp}>Hjhkjhkjhkjhkjhjkhjkh kdfh sdkjfhkd kshd  khsd wefwef we fwef h  hbh  hbhjb hbbh bh hbhbh  dxdfxfdxd xx dx fdx fdx xx fx</p>
                              </div>
                              <div className={style.InfoMess}>
                              <div className={style.data}>
                                    <p className={style.textdata}>18:20, 03.12.20</p>
                                    </div>

                                   
                                    </div>
                          </div>

                          <div className={style.UserMess}>
                              <div  className={style.UserText}>
                                <p>Hjhkjhkjhkjhkjhjkhjkh kdfh sdkjfhkd kshd  khsd wefwef we fwef h  hbh  hbhjb hbbh bh hbhbh  dxdfxfdxd xx dx fdx fdx xx fx</p>
                              </div>
                              <div className={style.InfoMess}>
                              <div className={style.data}>
                                    <p className={style.textdata}>18:20, 03.12.20</p>
                                    </div>

                                    <div className={style.check}>
                                            <span className = {style.iconCheck}>
                                            <i class="fal fa-check-double"></i>
                                            </span>
                                    </div>
                                    </div>
                                    
                          </div>

                          <div className={style.OtherMess}>
                              <div  className={style.OtherText}>
                                <p  className={style.OtherTextp}>Hjhkjhkjhkjhkjhjkhjkh kdfh sdkjfhkd kshd  khsd wefwef we fwef h  hbh  hbhjb hbbh bh hbhbh  dxdfxfdxd xx dx fdx fdx xx fx</p>
                              </div>
                              <div className={style.InfoMess}>
                              <div className={style.data}>
                                    <p className={style.textdata}>18:20, 03.12.20</p>
                                    </div>

                                   
                                    </div>
                          </div>

                          <div className={style.UserMess}>
                              <div  className={style.UserText}>
                                <p>Hjhkjhkjhkjhkjhjkhjkh kdfh sdkjfhkd kshd  khsd wefwef we fwef h  hbh  hbhjb hbbh bh hbhbh  dxdfxfdxd xx dx fdx fdx xx fx</p>
                              </div>
                              <div className={style.InfoMess}>
                              <div className={style.data}>
                                    <p className={style.textdata}>18:20, 03.12.20</p>
                                    </div>

                                    <div className={style.check}>
                                            <span className = {style.iconCheck}>
                                            <i class="fal fa-check-double"></i>
                                            </span>
                                    </div>
                                    </div>
                                    
                          </div>

                          


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
    }
}

export default withRouter(Chat);