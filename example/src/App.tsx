import * as React from "react";
import "./App.css";
import { Tester, Button } from "njm-react-component-library";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Tester text={"Testing 1i"} />
        <Button>Testing 1i!</Button>
      </div>
    );
  }
}

export default App;
