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
import React, {useState, useEffect} from "react";

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

function Dashboard() {

    // API REQUEST
    const API = "https://chatbotmetrics.mybluemix.net"

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    let raw = "{\"month\":5,\n\"year\":2021}";

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    //STATE AND CHARTS,

    const [age, setAge] = useState({})
    const [gender, setGender] = useState({})
    const [nationality, setNationality] = useState({})
    const [services, setServices] = useState({})
    const [messages, setMessages] = useState({})
    const [satisfaction, setSatisfaction] = useState({})

    let chartBar = () => {
        let ageData = [];
        let genderData = [];
        let nationalityData = [];
        let servicesData = [];
        let messagesData = [];
        let satisfactionData = [];

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

        setAge({
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
        })


        setGender({
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
        })

        setNationality({
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
        })

        setServices({
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
        })

        setMessages({
            labels: ["01", "02", "03", "04", "05", "06", "07",
                "08", "09", "10", "11", "12","13", "14","15",
                "16","17","18","19","20","21", "22", "23",
                "24", "25", "26", "27", "28", "29","30",],
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
        })

        setSatisfaction({
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
        })

    }

    console.log(age)
    console.log(messages)
    console.log(gender)
    console.log(nationality)
    console.log(services)
    console.log(satisfaction)


    useEffect(() => {
        chartBar();
    }, []);

    return (
    <>
      <div className="content">
        <Form>
           <Row form className="searchConsult">
               <FormGroup className="form_month">
                   <Label for="exampleSelect">Mes de Consulta</Label>
                   <Input type="select" name="select" id="month">
                       <option>Enero</option>
                       <option>Febrero</option>
                       <option>Marzo</option>
                       <option>Abril</option>
                       <option>Mayo</option>
                       <option>Junio</option>
                       <option>Julio</option>
                       <option>Agosto</option>
                       <option>Septiembre</option>
                       <option>Octubre</option>
                       <option>Noviembre</option>
                       <option>Diciembre</option>
                   </Input>
               </FormGroup>
               <FormGroup className="form_month">
                   <Label for="exampleSelect">Año</Label>
                   <Input type="select" name="select" id="year">
                       <option>2021</option>
                       <option>2022</option>
                       <option>2023</option>
                       <option>2024</option>
                       <option>2025</option>
                   </Input>
               </FormGroup>
               <FormGroup className="form_month">
                   <Button className="button_form">Consultar</Button>
               </FormGroup>
           </Row>
        </Form>

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
                      data={age}
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
                    data={gender}
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
                      data={nationality}
                      options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
            <Col lg="4">
                <Card className="card-chart">
                    <CardHeader>
                        <h5 className="card-category">No Mensajes x U.Tiempo</h5>
                        <CardTitle tag="h3">
                            <i className="tim-icons icon-single-02 text-primary" />{" "}
                            No Mensajes X U.Tiempo
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div className="chart-area">
                            <Line
                                data={messages}
                                options={chartExample4.options}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="4">
                <Card className="card-chart">
                    <CardHeader>
                        <h5 className="card-category">Servicios mas solicitados</h5>
                        <CardTitle tag="h3">
                            <i className="tim-icons icon-single-02 text-primary" />{" "}
                            Servicios mas solicitados
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div className="chart-area">
                            <Bar
                                data={services}
                                options={chartExample3.options}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="4">
                <Card className="card-chart">
                    <CardHeader>
                        <h5 className="card-category">Satisfacción Usuario</h5>
                        <CardTitle tag="h3">
                            <i className="tim-icons icon-single-02 text-primary" />{" "}
                            Se resolvió la duda
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div className="chart-area">
                            <Bar
                                data={satisfaction}
                                options={chartExample3.options}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
