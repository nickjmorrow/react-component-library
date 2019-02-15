import {
  Footer,
  ThemeContext,
  generateColorShades
} from "njm-react-component-library";
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
        <ThemeContext.Provider
          value={{
            colors: {
              primary: generateColorShades({
                hue: 260,
                lightnessIncrement: 10
              })
            },
            border: {
              borderRadius: {
                default: "8px"
              }
            }
          }}>
          <Wrapper>
            <LibraryAppBar />
            <Landing />
            <Footer />
          </Wrapper>
        </ThemeContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;

const Wrapper = styled.div`
  height: 100%;
`;
