import {
  ArgumentType,
  Footer,
  ThemeContext,
  ThemeInputsContext,
  getThemeFromNewInputs,
  getMergedThemeInputs,
  updateThemeInputs
} from "njm-react-component-library";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { LibraryAppBar } from "./components/LibraryAppBar";
import { Landing } from "./Landing";

const initialThemeInputs: ArgumentType<typeof updateThemeInputs>[0] = {
  colors: {
    core: {
      hue: 222
    },
    accent: {
      hue: 180
    },
    neutral: {
      hue: 222
    },
    success: {
      hue: 130
    },
    warning: {
      hue: 140
    },
    danger: {
      hue: 150
    }
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
            <Landing />
            <Footer />
          </Wrapper>
        </ThemeInputsContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100%;
`;
