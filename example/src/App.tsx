import * as React from "react";
import "./App.css";
import { Button, LabeledInputWrapper } from "njm-react-component-library";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Button>Testing 1i!</Button>
        <LabeledInputWrapper>Testing</LabeledInputWrapper>
      </div>
    );
  }
}

export default App;
