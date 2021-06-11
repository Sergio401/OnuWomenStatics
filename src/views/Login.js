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
import React, { useState } from "react";
//import routes from "../routes";

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

import onuLogo from "../assets/img/logos/ONU Women Logo Spanish.png"

function Login(props) {

    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = event => {
        event.preventDefault();
        (username === "admin" && password === "admin") ? props.history.push('/admin/dashboard') : console.log("ok")
    }

    return (
        <>
            <Row className="min-login-vh justify-content-center align-items-center">
                {/* <Col lg="3" md="3" sm="3">
                    <Media object src={onuLogo} alt="ONU Mujeres" />
                </Col> */}
                <Col lg="4" md="4" sm="4">
                    <div className="content">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Media object src={onuLogo} alt="ONU Mujeres" />
                            </FormGroup>
                            <FormGroup>
                                {/* <Label for="user" className="label_login">Usuario</Label> */}
                                <Input
                                    type="text"
                                    name="user"
                                    id="user"
                                    placeholder="Ingrese su usuario"
                                    onChange={(e) => setUser(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                {/* <Label for="pass" className="label_login">Contraseña</Label> */}
                                <Input
                                    type="password"
                                    name="pass"
                                    id="pass"
                                    placeholder="Ingrese su contraseña"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </FormGroup>
                            {/* <Button>Iniciar Sesión</Button> */}
                            <FormGroup>
                                <Input type="submit" className="button_form" value="Iniciar Sesión"></Input>
                            </FormGroup>
                        </Form>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Login;