import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import GlobalStyle from "assets/styles/GlobalStyle";
import PropTypes from "prop-types";

//@TODO: Sprawdzić jak przestesować taki komponent

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

MainTemplate.PropTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired
};

export default MainTemplate;
