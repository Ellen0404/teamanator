import React, { useState } from "react";
import {HomeStyle}  from '../style/index.js';
import { Container} from "reactstrap";
import { Button as SemButton, Modal as SemModal } from 'semantic-ui-react'
import { Link, useLocation } from "react-router-dom";


function Homepage() {

    return (
        <div className="App">
            <HomeStyle>
            <Container className="themed-container" fluid={true}>
                    <div className="sidebar">
                        {/* <div className="ui left visible fixed sidebar"> */}
                            {/* <div className="pusher"> */}
                            <img src={`${process.env.PUBLIC_URL}/images/TeamanatorIcon.png`} className="TIcon1"></img>
                            <SemButton id="SemButton"  className= "logInButtons" fluid color="blue"><Link to="/login">Log-in</Link></SemButton>
                            <SemButton id="SemButton" className= "logInButtons" fluid color="blue"><Link to="/register">Create Account</Link></SemButton>
                            <SemButton id="SemButton" className= "logInButtons" fluid color="blue">About us</SemButton>
                            {/* </div> */}
                        </div>
                        <div className="homepageBody">
                        <div className="TopLogo homepageHeader"> 
                            <img src={`${process.env.PUBLIC_URL}/images/TeamanatorLogo.png`}  className="headerLogo"></img>
                            <p>Providing organizational solutions for all the teams in our lives.  Whether you are managing your daughters soccer team or your employees, keep everything at your fingertips. </p>
                            <button className="ui secondary button"> <Link to="/register">Create Account</Link></button>
                        </div>
                        <div className="DividerHeadings">
                            <h1 className="benefitsHeader">BENEFITS</h1>
                        </div>
                        <div className="Benefits ui three comlmn grid">
                            <div className="four wide column">
                            </div>
                            <div className="four wide column">
                                <div className="BenefitsSection1 ui segment">
                                    <img src={`${process.env.PUBLIC_URL}/images/TBene1.png`} className="TBenes" ></img>
                                    <p className="benefitsParagraphs">Create custom team-member templates that only include the information you need. </p>
                                </div>
                            </div>
                            <div className="four wide column">
                                <div className="BenefitsSection2 ui segment">
                                    <img src={`${process.env.PUBLIC_URL}/images/TBene2.png`} className="TBenes" ></img>
                                    <p className="benefitsParagraphs">Save money with our all in one dashboard to work with your team. </p>
                                </div>
                            </div>
                            <div className="four wide column">
                                <div className="BenefitsSection3 ui segment">
                                    <img src={`${process.env.PUBLIC_URL}/images/TBene3.png`} className="TBenes" ></img>
                                    <p className="benefitsParagraphs">Stop wasting time tracking information in spreadsheets and by hand. </p>
                                </div>
                            </div>   
                        </div>
                        <div className="breakSection"></div>
                        <div className="DividerHeadings">
                            <h1>HOW IT WORKS</h1>
                        </div>
                            <div className="Works ui four comlmn grid">
                            <div className="four wide column">
                            </div>
                            <div className="four wide column">
                                <div className="WorksSectionA">
                                    <img src={`${process.env.PUBLIC_URL}/images/TWorks1.png`} ></img>
                                </div>
                                <p className="worksText">Choose your template </p>
                                 <p className="worksText">Choose from Employees, Students, Sports and Clients</p>
                            </div>
                            <div className="four wide column">
                                <div className="WorksSectionB">
                                    <img src={`${process.env.PUBLIC_URL}/images/TWorks2.png`} ></img>
                                </div>
                                <p className="worksText"> Add all your team members </p>
                                <p className="worksText"> Add only the information you need with our custom templates</p>
                            </div>
                            <div className="four wide column">
                                <div className="WorksSectionC">
                                    <img src={`${process.env.PUBLIC_URL}/images/TWorks3.png`} ></img>
                                </div>
                                <p className="worksText">Get your team on track </p>
                                <p className="worksText">Track events with a reminder calendar, keep a to do list and much more</p>
                            </div>   
                        </div>
                    <div className="DividerHeadings">
                        <h1 className= "ActionHeader">SEE THE ACTION</h1>
                    </div>
                    <div className="actionSection">
                    <div className="ui embed" data-source={`${process.env.PUBLIC_URL}/images/TeamanatorDemo_1.mp4`}  autoplay loop data-id="O6Xo21L0ybE" data-icon="video" data-placeholder="/images/bear-waving.jpg"></div>
                    </div>
                </div>
                       
            </Container>
            </HomeStyle>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="homepageFooter">

            </div>
        </div>
    )

}


export default Homepage;