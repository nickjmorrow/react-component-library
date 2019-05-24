import {
  ArgumentType,
  Footer,
  ThemeContext,
  ThemeInputsContext,
  getThemeFromNewInputs,
  getMergedThemeInputs,
  updateThemeInputs
} from "react-component-library";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { LibraryAppBar } from "./components/LibraryAppBar";
import { Main } from "./Main";

const initialThemeInputs: ArgumentType<typeof updateThemeInputs>[0] = {
  colors: {
    core: {
      hue: 210,
      middleLightness: 50,
      saturation: 60
    },
    accent: {
      hue: 267
    },
    success: {
      hue: 148,
      saturation: 55
    },
    warning: {
      hue: 49,
      hueDecrement: 6,
      lightnessDecrement: 4,
      saturation: 72
    },
    danger: {
      hue: 344
    }
  },
  typography: {
    fontFamily: { default: "Work Sans, sans-serif", title: "Muli, sans-serif" }
  }
};

const App: React.SFC = () => {
  const [themeInputs, setThemeInputs] = React.useState(initialThemeInputs);

  const handleUpdateThemeInputs = (
    newThemeInputs: ArgumentType<typeof updateThemeInputs>[0]
  ): void => setThemeInputs(updateThemeInputs(newThemeInputs));

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeContext.Provider value={getThemeFromNewInputs(themeInputs)}>
        <ThemeInputsContext.Provider
          value={{
            themeInputs: getMergedThemeInputs(themeInputs),
            updateThemeInputs: handleUpdateThemeInputs
          }}>
          <Wrapper>
            <LibraryAppBar />
            <Main />
            <Footer style={{ marginTop: "40px" }} />
          </Wrapper>
        </ThemeInputsContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
