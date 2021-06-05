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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import usaidLogo from "../../assets/img/logos/USAID_logo.png"
import riohachaLogo from "../../assets/img/logos/Logo Alcaldia Riohacha.png"
import mujeresEmpoderadasRiohaca from "../../assets/img/logos/Logo Casa Mujeres Empoderadas Riohacha.png"
import barranquillaLogo from "../../assets/img/logos/Alcaldia Barranquilla + Soy Barranquilla.jpg"
import onuLogo from "../../assets/img/logos/ONU Women Logo Spanish.png"

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.usaid.gov/es/colombia">
              <img width="150rem"
                alt="USAID"
                src={usaidLogo} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.barranquilla.gov.co">
              <img width="300rem"
                alt="Alcaldía Distrital de Riohacha"
                src={barranquillaLogo} />
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="https://www.riohacha-laguajira.gov.co/Paginas/Inicio.aspx">
              <img width="150rem"
                alt="Casa de Mujeres Empoderadas Riohacha"
                src={mujeresEmpoderadasRiohaca} />
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink href="https://www.unwomen.org/es">
              <img width="120rem"
                alt="ONU Mujeres"
                src={onuLogo} />
            </NavLink>
          </NavItem>
        </Nav>
        <br/>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://www.ecci.edu.co/es/Bogota/inicio"
            target="_blank"
          >
            CEINTECCI
          </a>{" "}
          for a better society.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
