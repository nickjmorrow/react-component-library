import { AppBar, Typography } from "njm-react-component-library";
import * as React from "react";
import "./App.css";
import { Landing } from "./Landing";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppBar>
            <Typography variant="h2" color="light">
              Component Library
            </Typography>
          </AppBar>
          <Landing />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
