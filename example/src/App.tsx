import {
  Footer,
  ThemeContext,
  generateColorShades,
  updateTheme,
  ArgumentType
} from "njm-react-component-library";
import { LibraryAppBar } from "./components/LibraryAppBar";
import * as React from "react";
import "./App.css";
import { Landing } from "./Landing";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

const initialState = {
  theme: {
    colors: {
      core: generateColorShades({
        hue: 99,
        lightnessIncrement: 10
      })
    },
    border: {
      borderRadius: {
        default: "8px"
      }
    }
  }
};

class App extends React.Component<{}, typeof initialState> {
  public readonly state = initialState;

  public handleUpdateTheme = (theme: ArgumentType<typeof updateTheme>[0]) => {
    this.setState({
      theme: updateTheme(theme)
    });
  };
  public render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeContext.Provider
          value={{
            theme: this.state.theme,
            updateTheme: this.handleUpdateTheme
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
