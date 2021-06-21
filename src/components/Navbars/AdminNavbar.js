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
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container,
  Dropdown,
  DropdownToggle
} from "reactstrap";

import manitasSolidarias from "../../assets/img/logos/Manitas Solidarias.png"
import logoRiohachaVertical from "../../assets/img/logos/Avatar Riohacha Logo Vertical.png"
import AvatarLogo from "../../assets/img/logos/Avatar Riohacha Logo.png"

function AdminNavbar(props) {
  const [collapseOpen] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");

  const [dropDownIsOpen, setdropDownIsOpen] = React.useState(false);
  const handleClick = () => {
    setdropDownIsOpen(!dropDownIsOpen);
  };

  function handleLogout() {
    localStorage.removeItem('LOGED_IN');
    window.location.href = "/admin/login";
    //props.history.push('/admin/login');
    // <Redirect
    //   to={{
    //     pathname: "/admin/login"
    //   }}
    // />
  }

  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  return (
    <>
      <Navbar className={classNames("navbar-absolute", color)} expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
            </div>
            <NavbarBrand href="#" onClick={(e) => e.preventDefault()}>
              <strong>{props.brandText.split('-')[0]}</strong>
              <br />
              <h4>{props.brandText.split('-')[1]}</h4>
            </NavbarBrand>
          </div>
          {/* <img width="100rem"
            className="nabvar-avatar"
            alt="ONU Mujeres"
            src={AvatarLogo} /> */}
          <Dropdown isOpen={dropDownIsOpen} toggle={handleClick}>
            <DropdownToggle tag="div">
              <img width="100rem"
                className="nabvar-avatar"
                alt="ONU Mujeres"
                src={AvatarLogo} />
            </DropdownToggle>
            <ul className="dropdown-menu dropdown-menu-right show">
              {/* <li className="header-title">Opciones</li> */}
              <li className="">
                <button className="btn btn-info" onClick={() => handleLogout()}>Logout</button>
              </li>
            </ul>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
