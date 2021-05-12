/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from "react";
import routes from "../routes";

// reactstrap components
import {
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Media,
    Button,
} from "reactstrap";

import wun from "../un-women-logo.png"

function Login(props) {

    const [username, setLogin] = useState("")

    const handleSubmit = event => {
        event.preventDefault();
        username === "admin" ? props.history.push('/admin/dashboard') : console.log("ok")
    }

    return (
    <>
        <Row className="min-vh-100 justify-content-center align-items-center">
            <Col lg="3" md="3" sm="3">
                <Media object src={wun} alt="UN Women"/>
            </Col>
            <Col lg="4" md="4" sm="4">
            <div className="content">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail" className="label_login">Usuario</Label>
                        <Input
                            type="text"
                            name="user"
                            id="exampleUser"
                            placeholder="Ingrese su usuario"
                            onChange={(e) => setLogin(e.target.value)} />
                    </FormGroup>
                    <Button>Iniciar Sesión</Button>
                </Form>
            </div>
            </Col>
        </Row>
    </>
    );
}

export default Login;