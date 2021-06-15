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
    Table,
} from "reactstrap";

// core components
import {
    chartExample3,
    chartExample4,
} from "variables/charts.js";

import { API, requestOptions, APIRequest } from "variables/utils";

import Load from "components/Load/Load";
import { textSpanIntersectsWithTextSpan } from "typescript";

//function Dashboard() {
class MessagesList extends React.Component {

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
            loading: true,
            messagesList: {},
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
            }, 120 * 1000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {
        return this.state.loading ? <Load /> : (<>
            <div className="content">
                <Form>
                    <Row form className="searchConsult">
                        <FormGroup className="form_month">
                            <Label for="month">Mes</Label>
                            <Input type="select" name="select" id="month" defaultValue={this.state.month}>
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
                            <Input type="select" name="select" id="year" defaultValue={this.state.year}>
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
                        <FormGroup className="form_month float-right">
                            <Input type="button" className="button_form" onClick={() => this.props.history.push('/admin/dashboard')} value="Métricas Chatbot"></Input>
                        </FormGroup>
                    </Row>
                </Form>

                {
                    (this.state.messagesList.datasets[0].data.length !== 0) ?
                        <>
                            <h1 className="text-center mt-md"><strong>No hay datos disponibles para el periodo consultado</strong></h1>
                        </> :
                        <>
                            <Card className="card-plain mb-0"> {/* bg-transparent or black content customization */}
                                <CardHeader onClick={(e) => this.setState({ firstToogle: !this.state.firstToogle })}>
                                    <CardTitle tag="h3">
                                        <i className="tim-icons icon-bullet-list-67" />{" "}
                                        Mensajes No Comprendidos por el bot - {this.formatter.format(new Date(this.state.year, this.state.month - 1))} de {this.state.year}
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Collapse isOpen={true/*this.state.firstToogle*/}>
                                        <Row>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Teléfono</th>
                                                        <th>Mensaje</th>
                                                        <th>Otro</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* {this.state.messagesList.map(row => (
                                                        <tr key={`row-${row.id}`}>
                                                            <th scope="row">{row.id}</th>
                                                            <td>
                                                                <div className="parent">{row.id}</div>
                                                            </td>
                                                            <td>{row.number}</td>
                                                            <td>{row.message}</td>
                                                        </tr>
                                                    ))} */}
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>123456</td>
                                                        <td>Una Pregunta</td>
                                                        <td/>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>56789</td>
                                                        <td>Otra Pregunta</td>
                                                        <td/>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>1234567</td>
                                                        <td>Una Pregunta Más</td>
                                                        <td/>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Row>
                                    </Collapse>
                                </CardBody>
                            </Card>

                            {/* <small className="float-right">Periodo Consultado: {this.formatter.format(new Date(this.state.year, this.state.month - 1))} de {this.state.year}</small>
                            <br /> */}
                            <small className="float-right">Última Actualización: {this.state.updateTime}</small>
                            <br />
                        </>}
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
        let messagesListData = {};

        let raw = String.raw`{"month":${this.state.month},"year":${this.state.year}}`;

        this.setState({
            loading: true
        })

        messagesListData = await APIRequest('/getothermessages/', { ...requestOptions, body: raw });

        console.log(`\n\n\n\n${Object.keys(messagesListData)}\n\n\n\n${Object.values(messagesListData)}`)

        this.setState({
            messagesList: {
                labels: Object.keys(messagesListData),
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
                        data: Object.values(messagesListData),
                    },
                ],
            },
            updateTime: this.getLastUpdateTime(),
            loading: false
        })
        console.log('Updated');
    }

}

export default MessagesList;
