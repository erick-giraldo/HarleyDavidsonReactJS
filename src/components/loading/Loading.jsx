import React from "react";
import Logo from "../../assets/images/logo.webp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import isEmpty from "is-empty";

const Loading = (props) => {
  const { text } = props;

  const theme = createTheme({
    palette: {
      dark: {
        main: "#747474",
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="load-7 col-lg-10 col-md-12 col-sm-12 main-container">
        <div id="app-preloader">
          <div className="fade-in-image">
            <img src={Logo} width="150px" alt="logo loading" />
          </div>
          {!isEmpty(text) ? (
            <h4>{text}</h4>
          ) : (
            <div className="preloader-title" />
          )}
          <div className="preloader-spinner">
            <CircularProgress size="30px" color="dark" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Loading;
