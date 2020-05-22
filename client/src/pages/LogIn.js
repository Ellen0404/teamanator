import React from "react";
import Navbar from "../components/Navbar";

import {Container,Row, Jumbotron, Button, Form, Input, FormGroup, Label} from "reactstrap";
import { Link } from "react-router-dom";

function LogIn () { 
    return (
            <div className = "app">
                <Navbar></Navbar>
                    <Container>
                        <Jumbotron fluid>
                            <Row>
                                <Form className ="text-center">
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="email" />
                                    </FormGroup>
                                    <Button><Link to="/template">LogIn</Link></Button>
                                </Form>
                            </Row>
                        </Jumbotron>
                    </Container>

            </div>

)
}

export default LogIn