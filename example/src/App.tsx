import { AppBar, Typography, Footer, GithubIcon } from "njm-react-component-library";
import * as React from "react";
import "./App.css";
import { Landing } from "./Landing";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <AppBar>
            <Typography variant="h2" color="light">
              Component Library
            </Typography>
            <div />
            <GithubIcon style={{width: '32px', height: '32px', cursor: 'pointer'}} />
          </AppBar>
          <Landing />
          <Footer />
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
`;
