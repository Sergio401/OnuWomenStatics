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

// reactstrap components
import { Dropdown, DropdownToggle, Badge } from "reactstrap";
import { ThemeContext, themes } from "contexts/ThemeContext";

function FixedPlugin(props) {
  const [dropDownIsOpen, setdropDownIsOpen] = React.useState(false);
  const handleClick = () => {
    setdropDownIsOpen(!dropDownIsOpen);
  };
  return (
    <div className="fixed-plugin">
      <Dropdown isOpen={dropDownIsOpen} toggle={handleClick}>
        <DropdownToggle tag="div">
          <i className="fa fa-cog fa-2x" />
        </DropdownToggle>
        <ul className="dropdown-menu show">
          <li className="header-title">TEMAS</li>
          <li className="adjustments-line text-center color-change">
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <>
                  <span className="color-label">LIGHT MODE</span>{" "}
                  <Badge
                    className="light-badge mr-2"
                    onClick={() => changeTheme(themes.light_default)}
                  />{" "}
                  {/* <Badge
                    className="dark-badge ml-2"
                    onClick={() => changeTheme(themes.default)}
                  />{" "}
                  <span className="color-label">DEFAULT DARK MODE</span>{" "} */}
                  <br/>
                  <span className="color-label">LIGHT MODE 2</span>{" "}
                  <Badge
                    className="light-badge ml-2"
                    onClick={() => changeTheme(themes.light)}
                  />{" "}
                  {/* <Badge
                    className="black-badge ml-2"
                    onClick={() => changeTheme(themes.dark)}
                  />{" "}
                  <span className="color-label">DARK MODE</span>{" "} */}
                  <br/>
                  <span className="color-label">GREEN MODE</span>{" "}
                  <Badge
                    className="green-badge ml-2"
                    onClick={() => changeTheme(themes.green)}
                  />{" "}
                  {/* <Badge
                    className="black-badge ml-2"
                    onClick={() => changeTheme(themes.dark)}
                  />{" "}
                  <span className="color-label">DARK MODE</span>{" "} */}
                </>
              )}
            </ThemeContext.Consumer>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}

export default FixedPlugin;
