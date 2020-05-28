import React, { useState } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import { HeaderStyle } from '../style/index.js';


function Sidebar() {
    const [users, setUsers] = useState({
        user_id: "",
        field1: "",
        field2: "",
        field3: "",
        field4: "",
        field5: "",
        field6: "",
        field7: ""
    });
    const [show, setShow] = useState(false);
    const [field, setField] = useState();

    const handleCloseEmployee = () => setShow(false);
    const handleShowEmployee = () => setShow(true);
    const handleInputChange = event => {
        const {name, value} = event.target;
        setUsers({...users, [name]: value})
        setField({})
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        // to pass template from MemberBuild.js
        // update template and save to database


    }
    
    return (
        <HeaderStyle>
        <section id="slide-out">
            <ul id="side-content">
                <h5 id="dashboardTitle"className="text-center">My Dashboard</h5>
                <img id="profile-img" src="https://getuikit.com/docs/images/avatar.jpg" alt="profile" />
                <hr />
                <h5>Welcome, </h5>
                <br />
                <Button variant="secondary" size="sm" onClick={handleShowEmployee} block>Add New Employee</Button>
                <Button variant="secondary" size="sm" block>Remove Employee</Button>
                <Button variant="secondary" size="sm" block>Add Upcoming Event</Button>
                <Button variant="danger" size="sm" block>Sign Out</Button>
            </ul>

        <Modal show={show} onHide={handleCloseEmployee}>
            <Modal.Header closeButton>
            <Modal.Title>Add New Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="sm" lg={2}>
                        Name
                        </Form.Label>
                        <Col>
                        <input 
                        name="field1"
                        value={users.field1}
                        onChange={handleInputChange}
                        size="sm" 
                        type="text" 
                        placeholder="Enter Name" />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label column="sm" lg={2}>
                        Title
                        </Form.Label>
                        <Col>
                        <Form.Control 
                        name="field2"
                        value={users.field2}
                        onChange={handleInputChange}
                        size="sm" 
                        type="text" 
                        placeholder="Enter Title / Position" />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label column="sm" lg={2}>
                        Salary
                        </Form.Label>
                        <Col>
                        <Form.Control 
                        name="salary"
                        value={users.field3}
                        onChange={handleInputChange}
                        size="sm" 
                        type="text" 
                        placeholder="Enter Salary" />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label column="sm" lg={2}>
                        Department
                        </Form.Label>
                        <Col>
                        <Form.Control 
                        name="department"
                        value={users.field4}
                        onChange={handleInputChange}
                        size="sm" 
                        type="text" 
                        placeholder="Enter Department Location" />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label column="sm" lg={2}>
                        Phone Number
                        </Form.Label>
                        <Col>
                        <Form.Control 
                        name="phone"
                        value={users.field5}
                        onChange={handleInputChange}
                        type="text" 
                        placeholder="Enter Best Phone Number" />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label column="sm" lg={2}>
                        Email
                        </Form.Label>
                        <Col>
                        <Form.Control
                        name="email"
                        value={users.field6}
                        onChange={handleInputChange}
                        size="sm" 
                        type="text" 
                        placeholder="Enter Email" />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label column="sm" lg={2}>
                        Address / Location
                        </Form.Label>
                        <Col>
                        <Form.Control
                        name="address"
                        value={users.field7}
                        onChange={handleInputChange}
                        size="sm" 
                        type="text" 
                        placeholder="Enter Employee's Location" />
                        </Col>
                    </Form.Row>
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="danger" onClick={handleCloseEmployee}>
                Close
            </Button>
            <Button variant="secondary" onClick={handleFormSubmit}>
                Save Changes
            </Button>
            </Modal.Footer>
      </Modal>

     

        </section>
        </HeaderStyle>
    )
};

export default Sidebar;