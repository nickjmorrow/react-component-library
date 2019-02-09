import { Footer } from "njm-react-component-library";
import { LibraryAppBar } from "./components/LibraryAppBar";
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
          <LibraryAppBar />
          <Landing />
          <Footer />
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;

const Wrapper = styled.div`
  height: 100%;
`;
