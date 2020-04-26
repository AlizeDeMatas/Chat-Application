import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Home.css';
import images from '../../ProjectImages/ProjectImages';
import {Link} from "react-router-dom";

export default class HomePage extends Component {
    render() {
        return (<div>
            <Header/>
            <div className="splash-container">
                <div className="splash">
                    <h1 className="splash"> WEB CHAT APP</h1>
                    <p className="splash-subhead">
                        Let's talk with our loved ones
                    </p>
                    <div id="custom-button-wrapper">
                        <Link href="/" to='/login'>
                            <a className="my-super-cool-btn">
                                <div className="dots-container">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <span className="buttoncooltext">Get Started</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="content">
                    <h2 className="content-head is-center"> Features of WebChat Application</h2>

                    <div className="Appfeatures">
                        <div className="contenthead">
                            <h3 className="content-subhead">
                                <i className="fa fa-rocket"></i>
                                Get Started Quickly
                            </h3>
                            <p>
                                Just register yourself with this app and start chatting with your loved ones
                            </p>
                        </div>
                        <div className="l-box pure-u-l pure-u-md-1-2 pure-u-lg-1-4">
                            <h3 className="content-subhead">
                                <i className="fa fa-sign-in"></i>
                                Firebase Authentication
                            </h3>
                            <p>
                                Firebase Authentication has been implemented in this app
                            </p>
                        </div>
                        <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <h3 className="content-subhead">
                                <i className="fa fa-th-large"></i>
                                Media
                            </h3>
                            <p>
                                You can share images with your friends for better experience
                            </p>
                        </div>
                        <div className="l=box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <h3 className="content-subhead">
                                <i className="fa fa-refresh"></i>
                                Updates
                            </h3>
                            <p>
                                We will be working with new features for this app for better experience in the
                                future
                            </p>
                        </div>
                    </div>
                </div>
                <div className="AppfeaturesFounder">
                    <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                        <img width="300" alt="File Icons" class="pure-img-responsive" src={images.Maddison}/>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
                        <h2 className="content-head content-head-ribbon"> Maddison Scene
                        </h2>

                        <p style={{color:'white'}}>
                            The Founder of Coding Cafe.
                        </p>
                        <p style={{color: 'white'}}>
                            Currently working at Coding Cafe and busy to explore new ideas with new technologies
                            being developed
                        </p>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content-head is-center">Who We Are?</h2>
                    <div className="Appfeatures">
                        <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                            <form className="pure-form pure-form-stacked">
                                <fieldset>
                                    <label for="name">Your Name</label>
                                    <input id="name" type="text" placeholder="Your Name"/>

                                    <label for="email">Your Email</label>
                                    <input id="email" type="email" placeholder="Your Email"/>

                                    <label for="password">Your Password</label>
                                    <input id="password" type="password" placeholder="Your Password"/>

                                    <button type="submit" className="pure-button">Sign Up</button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="l-box-lrg pure-u-1 pure-u-md-3-5">

                                <h4>Contact Us</h4>
                                <p>
                                    For any question or suggestion you can directly contact us on our Facebook Page:
                                    <a href="https://facebook.com"> FB me !</a>
                                </p>
                                <p>
                                    Twitter:<a href="https://twitter.com"> Twitter !</a>
                                </p>
                                <p>
                                    Instagram:<a href="https://instagram.com"> Instagram !</a>
                                </p>

                                <h4>More Information</h4>
                                <p>
                                    To whom it may concern
                                </p>
                                <p>
                                    This App is developed for learning purpose - Developed by Alize De Matas
                                </p>ß
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>

            )
            }
            }