import React, { Component } from 'react';
import './main.css';
import { Container, Row, Col, Card, CardTitle, CardBody, CardHeader } from 'reactstrap';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Profile extends Component {

    state = {
        class: ''
    }

    getTab = (evt) =>{
        console.log(evt.target);
        
    }

    render() {
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-bar" style={{marginBottom: '-20px'}}>
                        <ul className="page-breadcrumb">
                            <li>
                                <Link to='/'>Home&nbsp;</Link>
                                <i className="fa fa-circle"></i>
                            </li>
                            <li>
                                <span>&nbsp;Profile Detail</span>
                            </li>
                        </ul>
                    </div><hr />
                    <section>
                            <Row className="profile-type-row">
                                <Col md={3}>
                                    <div className="profile-nav-link">
                                        <li style={{display: 'block', marginTop:'20px'}}>
                                            <h4 style={{color: '#578ebe'}}><b>Profile Account</b></h4>
                                        </li>
                                    </div>
                                </Col>
                                <Col md={9} className="profile-type">
                                    <li className="profile-nav-link" onClick={(event) => this.getTab(event)}>
                                        <h5><span className="icon-user">&nbsp;</span>Personal Info</h5>
                                    </li>
                                    <li className="profile-nav-link" onClick={(event) => this.getTab(event)}>
                                        <h5><span className="icon-calendar">&nbsp;</span>Change Password</h5>
                                    </li>
                                    <li className="profile-nav-link" onClick={(event) => this.getTab(event)}>
                                        <h5><span className="icon-credit-card">&nbsp;</span>Subscription</h5>
                                    </li>
                                    <li className="profile-nav-link" onClick={(event) => this.getTab(event)}>
                                        <h5><span className="icon-settings">&nbsp;</span>Settings</h5>
                                    </li>
                                    <li className="profile-nav-link" onClick={(event) => this.getTab(event)}>
                                        <h5><span className="icon-notebook">&nbsp;</span>Account Info</h5>
                                    </li>
                                    <li className="profile-nav-link" onClick={(event) => this.getTab(event)}>
                                        <h5><span className="fa fa-info-circle">&nbsp;</span>Terms And Condition</h5>
                                    </li>
                                </Col>
                            </Row><hr style={{margin: '0', padding: '0'}} />
                        
                    </section>
                    
                </div>
            </div>
        )
    }
}

export default Profile;