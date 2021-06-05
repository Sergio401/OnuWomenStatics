import { createContext } from "react";

export const themes = {
  default: "",
  light_default: "white-content-default",
  dark: "black-content",
  light: "white-content",
  green: "green-content"
};

export const ThemeContext = createContext({
  theme: themes.light_default,
  changeTheme: () => {},
});
