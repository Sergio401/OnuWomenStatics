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
import React from "react";

import {
    Bar,
    Line,
} from "react-chartjs-2";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Collapse,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";

// core components
import {
    chartExample3,
    chartExample4,
} from "variables/charts.js";

import { API, requestOptions, APIRequest } from "variables/utils";

//function Dashboard() {
class Dashboard extends React.Component {

    formatter = new Intl.DateTimeFormat('es', { month: 'long' });
    
    constructor(props) {
        super(props);

        this.state = {
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear(),
            timer: undefined,
            firstToogle: true,
            secondToogle: true,
            updateTime: this.getLastUpdateTime(),
            age: {},
            gender: {},
            nationality: {},
            services: {},
            messages: {},
            satisfaction: {},
        }
        console.log(`STATE ORIGIN\n\n\n${JSON.stringify(this.state)}\n\n\n`)
    }

    componentDidMount() {
        this.requestData(); //For first rendering

        //setTimeout(() => {
        //    this.forceUpdate();
        //}, 500);

        this.setState({
            timer: setInterval(() => {
                this.requestData();
                console.log('requested!')
                //this.forceUpdate();
            }, 30000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {
        return (<>
            <div className="content">
                <Form>
                    <Row form className="searchConsult">
                        <FormGroup className="form_month">
                            <Label for="month">Mes</Label>
                            <Input type="select" name="select" id="month">
                                <option defaultValue hidden value=''>Seleccione un mes</option>
                                <option value='1'>Enero</option>
                                <option value='2'>Febrero</option>
                                <option value='3'>Marzo</option>
                                <option value='4'>Abril</option>
                                <option value='5'>Mayo</option>
                                <option value='6'>Junio</option>
                                <option value='7'>Julio</option>
                                <option value='8'>Agosto</option>
                                <option value='9'>Septiembre</option>
                                <option value='10'>Octubre</option>
                                <option value='11'>Noviembre</option>
                                <option value='12'>Diciembre</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className="form_month">
                            <Label for="year">Año</Label>
                            <Input type="select" name="select" id="year">
                                <option defaultValue hidden value=''>Seleccione un año</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className="form_month">
                            <Input type="button" className="button_form" onClick={this.updateRequestDate} value="Consultar"></Input>
                        </FormGroup>
                    </Row>
                </Form>

                <Card className="card-plain mb-0"> {/* bg-transparent or black content customization */}
                    <CardHeader onClick={(e) => this.setState({ firstToogle: !this.state.firstToogle })}>
                        <CardTitle tag="h3">
                            <i className="tim-icons icon-badge" />{" "}
                                        Información de Usuarias
                                    </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Collapse isOpen={this.state.firstToogle}>
                            <Row>
                                <Col lg="4">
                                    <Card className="card-chart">
                                        <CardHeader>
                                            <h5 className="card-category">Edad</h5>
                                            <CardTitle tag="h3">
                                                <i className="tim-icons icon-single-02 text-primary" />{" "}
                  Edad
                </CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="chart-area">
                                                <Bar
                                                    data={this.state.age}
                                                    options={chartExample3.options}
                                                />
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-chart">
                                        <CardHeader>
                                            <h5 className="card-category">Género</h5>
                                            <CardTitle tag="h3">
                                                <i className="tim-icons icon-single-02 text-primary" />{" "}
                  Género
                </CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="chart-area">
                                                <Bar
                                                    data={this.state.gender}
                                                    options={chartExample3.options}
                                                />
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-chart">
                                        <CardHeader>
                                            <h5 className="card-category">Nacionalidad</h5>
                                            <CardTitle tag="h3">
                                                <i className="tim-icons icon-single-02 text-primary" />{" "}
                  Nacionalidad
                </CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="chart-area">
                                                <Bar
                                                    data={this.state.nationality}
                                                    options={chartExample3.options}
                                                />
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Collapse>
                    </CardBody>
                </Card>

                <Card className="card-plain mb-0"> {/* bg-transparent or black content customization */}
                    <CardHeader onClick={(e) => this.setState({ secondToogle: !this.state.secondToogle })}>
                        <CardTitle tag="h3">
                            <i className="tim-icons icon-chart-bar-32" />{" "}
                                        Métricas ChatBot
                                    </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Collapse isOpen={this.state.secondToogle}>
                            <Row>
                                <Col lg="4">
                                    <Card className="card-chart">
                                        <CardHeader>
                                            <h5 className="card-category">N° de Mensajes X Día</h5>
                                            <CardTitle tag="h3">
                                                <i className="tim-icons icon-single-02 text-primary" />{" "}
                            N° de Mensajes X Día
                        </CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="chart-area">
                                                <Line
                                                    data={this.state.messages}
                                                    options={chartExample4.options}
                                                />
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-chart">
                                        <CardHeader>
                                            <h5 className="card-category">Servicios más solicitados</h5>
                                            <CardTitle tag="h3">
                                                <i className="tim-icons icon-single-02 text-primary" />{" "}
                            Servicios Más Solicitados
                        </CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="chart-area">
                                                <Bar
                                                    data={this.state.services}
                                                    options={chartExample3.options}
                                                />
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-chart">
                                        <CardHeader>
                                            <h5 className="card-category">Satisfacción de las Usuarias</h5>
                                            <CardTitle tag="h3">
                                                <i className="tim-icons icon-single-02 text-primary" />{" "}
                            ¿Se resolvió la duda?
                        </CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="chart-area">
                                                <Bar
                                                    data={this.state.satisfaction}
                                                    options={chartExample3.options}
                                                />
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Collapse>
                    </CardBody>
                </Card>
                <small className="float-right">Periodo Consultado: {this.formatter.format(new Date(this.state.year, this.state.month-1))} de {this.state.year}</small>
                <br/>
                <small className="float-right">Última Actualización: {this.state.updateTime}</small>
                <br/>
            </div>
        </>)
    }

    updateRequestDate = () => {
        if (document.getElementById("month").value !== '' && document.getElementById("year").value !== '') {
            this.setState({
                month: document.getElementById("month").value,
                year: document.getElementById("year").value
            }, this.requestData)
        }
    }

    getLastUpdateTime = () => {
        let date = new Date();
        let out = '';
        out += date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
        out += date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
        out += date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return out;
    }

    requestData = async () => {
        let ageData = {};
        let genderData = {};
        let nationalityData = {};
        let servicesData = {};
        let messagesData = {};
        let satisfactionData = {};

        let raw = String.raw`{"month":${this.state.month},"year":${this.state.year}}`;

        ageData = await APIRequest('/getedad/', { ...requestOptions, body: raw });
        genderData = await APIRequest('/getgenero/', { ...requestOptions, body: raw });
        nationalityData = await APIRequest('/getnacionalidad/', { ...requestOptions, body: raw });
        servicesData = await APIRequest('/getcatsmenu/', { ...requestOptions, body: raw });
        messagesData = await APIRequest('/getgeneral/', { ...requestOptions, body: raw });
        satisfactionData = await APIRequest('/getsolution/', { ...requestOptions, body: raw });

        this.setState({
            age: {
                labels: Object.keys(ageData), // ["<18", "18-38", "38-47", ">47"],
                datasets: [
                    {
                        label: "Edad",
                        fill: true,
                        backgroundColor: "rgba(66,134,121,0.15)",
                        hoverBackgroundColor: "rgba(66,134,121,0.15)",
                        borderColor: "#FF5397",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: Object.values(ageData),
                    },
                ],
            },
            gender: {
                labels: Object.keys(genderData), // ["Mujer 💁‍♀", "LGTBIQ+ 🌈"],
                datasets: [
                    {
                        label: "Genero",
                        fill: true,
                        backgroundColor: "rgba(119,52,169,0)",
                        hoverBackgroundColor: "rgba(119,52,169,0)",
                        borderColor: "#0089D0",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: Object.values(genderData),
                    },
                ],
            },
            nationality: {
                labels: Object.keys(nationalityData), // ["🇨🇴", "🇨🇴 Ret", "Ven", "Otro"],
                datasets: [
                    {
                        label: "Nacionalidad",
                        fill: true,
                        backgroundColor: "rgba(119,52,169,0)",
                        hoverBackgroundColor: "rgba(119,52,169,0)",
                        borderColor: "#FF7577",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: Object.values(nationalityData),
                    },
                ],
            },
            services: {
                labels: Object.keys(servicesData), // ["Salud", "Violencia", "Migrantes", "Xenofobia", "Directorio", "Otros"],
                datasets: [
                    {
                        label: "Servicios",
                        fill: true,
                        backgroundColor: "rgba(119,52,169,0)",
                        hoverBackgroundColor: "rgba(119,52,169,0)",
                        borderColor: "#d048b6",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: Object.values(servicesData),
                    },
                ],
            },
            messages: {
                //labels: ["01", "02", "03", "04", "05", "06", "07",
                //    "08", "09", "10", "11", "12", "13", "14", "15",
                //    "16", "17", "18", "19", "20", "21", "22", "23",
                //    "24", "25", "26", "27", "28", "29", "30",],
                labels: Object.keys(messagesData),
                datasets: [
                    {
                        label: "Mensajes por unidad de tiempo",
                        fill: true,
                        backgroundColor: "rgba(66,134,121,0)",
                        borderColor: "#00d6b4",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#00d6b4",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#00d6b4",
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: Object.values(messagesData),
                    },
                ],
            },
            satisfaction: {
                labels: Object.keys(satisfactionData), // ["Si", "No"],
                datasets: [
                    {
                        label: "Respuesta",
                        fill: true,
                        backgroundColor: "rgba(119,52,169,0)",
                        hoverBackgroundColor: "rgba(119,52,169,0)",
                        borderColor: "#0089D0",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: Object.values(satisfactionData),
                    },
                ],
            },
            updateTime: this.getLastUpdateTime()

        })
        console.log('Updated');
    }

    requestDataWithoutLabels = () => {
        let ageData = [];
        let genderData = [];
        let nationalityData = [];
        let servicesData = [];
        let messagesData = [];
        let satisfactionData = [];

        //LOG FOR VALIDATE JSON RESPONSE
        //fetch(`${API}/getgeneral/`, requestOptions)
        //    .then(response => response.json())
        //    .then(response => console.log(`\n\n\n\n\nLOG JSON\n\n\n${JSON.stringify(response)}\n\n`))

        fetch(`${API}/getedad/`, requestOptions)
            .then(response => response.json())
            .then(response => Object.values(response))
            .then(data => ageData.push(...data))

        fetch(`${API}/getgenero/`, requestOptions)
            .then(response => response.json())
            .then(response => Object.values(response))
            .then(data => genderData.push(...data))

        fetch(`${API}/getnacionalidad/`, requestOptions)
            .then(response => response.json())
            .then(response => Object.values(response))
            .then(data => nationalityData.push(...data))

        fetch(`${API}/getcatsmenu/`, requestOptions)
            .then(response => response.json())
            .then(response => Object.values(response))
            .then(data => servicesData.push(...data))

        fetch(`${API}/getgeneral/`, requestOptions)
            .then(response => response.json())
            .then(response => Object.values(response))
            .then(data => messagesData.push(...data))

        fetch(`${API}/getsolution/`, requestOptions)
            .then(response => response.json())
            .then(response => Object.values(response))
            .then(data => satisfactionData.push(...data))

        setTimeout(() => {
            this.setState({
                age: {
                    labels: ["<18", "18-38", "38-47", ">47"],
                    datasets: [
                        {
                            label: "Edad",
                            fill: true,
                            backgroundColor: "rgba(66,134,121,0.15)",
                            hoverBackgroundColor: "rgba(66,134,121,0.15)",
                            borderColor: "#FF5397",
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            data: ageData,
                        },
                    ],
                },
                gender: {
                    labels: ["Mujer 💁‍♀", "LGTBIQ+ 🌈"],
                    datasets: [
                        {
                            label: "Genero",
                            fill: true,
                            backgroundColor: "rgba(119,52,169,0)",
                            hoverBackgroundColor: "rgba(119,52,169,0)",
                            borderColor: "#0089D0",
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            data: genderData,
                        },
                    ],
                },
                nationality: {
                    labels: ["🇨🇴", "🇨🇴 Ret", "Ven", "Otro"],
                    datasets: [
                        {
                            label: "Nacionalidad",
                            fill: true,
                            backgroundColor: "rgba(119,52,169,0)",
                            hoverBackgroundColor: "rgba(119,52,169,0)",
                            borderColor: "#FF7577",
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            data: nationalityData,
                        },
                    ],
                },
                services: {
                    labels: ["Salud", "Violencia", "Migrantes", "Xenofobia", "Directorio", "Otros"],
                    datasets: [
                        {
                            label: "Servicios",
                            fill: true,
                            backgroundColor: "rgba(119,52,169,0)",
                            hoverBackgroundColor: "rgba(119,52,169,0)",
                            borderColor: "#d048b6",
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            data: servicesData,
                        },
                    ],
                },
                messages: {
                    labels: ["01", "02", "03", "04", "05", "06", "07",
                        "08", "09", "10", "11", "12", "13", "14", "15",
                        "16", "17", "18", "19", "20", "21", "22", "23",
                        "24", "25", "26", "27", "28", "29", "30",],
                    datasets: [
                        {
                            label: "Mensajes por unidad de tiempo",
                            fill: true,
                            backgroundColor: "rgba(66,134,121,0)",
                            borderColor: "#00d6b4",
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            pointBackgroundColor: "#00d6b4",
                            pointBorderColor: "rgba(255,255,255,0)",
                            pointHoverBackgroundColor: "#00d6b4",
                            pointBorderWidth: 20,
                            pointHoverRadius: 4,
                            pointHoverBorderWidth: 15,
                            pointRadius: 4,
                            data: messagesData,
                        },
                    ],
                },
                satisfaction: {
                    labels: ["Si", "No"],
                    datasets: [
                        {
                            label: "Servicios",
                            fill: true,
                            backgroundColor: "rgba(119,52,169,0)",
                            hoverBackgroundColor: "rgba(119,52,169,0)",
                            borderColor: "#0089D0",
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            data: satisfactionData,
                        },
                    ],
                }
            })
        }, 1000);
    }

}

export default Dashboard;
