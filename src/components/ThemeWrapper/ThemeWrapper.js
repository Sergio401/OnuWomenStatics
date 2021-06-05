import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "contexts/ThemeContext";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light_default);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.remove("black-content");
        document.body.classList.remove("white-content-default");
        document.body.classList.remove("green-content");
        document.body.classList.add("white-content");
        break;
      case themes.dark:
        document.body.classList.remove("white-content");
        document.body.classList.remove("white-content-default");
        document.body.classList.remove("green-content");
        document.body.classList.add("black-content");
        break;
      case themes.light_default:
        document.body.classList.remove("white-content");
        document.body.classList.remove("black-content");
        document.body.classList.remove("green-content");
        document.body.classList.add("white-content-default");
        break;
      case themes.green:
        document.body.classList.remove("white-content");
        document.body.classList.remove("black-content");
        document.body.classList.remove("white-content-default");
        document.body.classList.add("green-content");
        break;
      case themes.default:
      default:
        document.body.classList.remove("black-content");
        document.body.classList.remove("white-content");
        document.body.classList.remove("white-content-default");
        document.body.classList.remove("green-content");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
