import React from "react";
import logo from "./images/logo.jpg";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple, indigo, blue, teal, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: indigo[500],
    },
    tertiary: {
      main: teal[500],
    },
    quaternary: {
      main: red[500],
    },
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-500 via-blue-500 via-teal-500 to-red-500 h-20">
        <div className="container mx-auto flex items-center justify-between px-34">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-16 rounded-full" />
            <h1 className="ml-2 text-lg font-medium text-white">
              Resume
            </h1>
          </div>
          <div className="flex items-center">
            <a
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-indigo-100 focus:outline-none focus:text-indigo-100"
              href="/"
            >
              Home
            </a>
            <a
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-indigo-100 focus:outline-none focus:text-indigo-100"
              href="/about"
            >
              About
            </a>
            <a
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-indigo-100 focus:outline-none focus:text-indigo-100"
              href="/portfolio"
            >
              Portfolio
            </a>
            <a
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-indigo-100 focus:outline-none focus:text-indigo-100"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
};

export default Navbar;
