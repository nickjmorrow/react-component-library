import * as React from "react";
import "./App.css";
import {
  Button,
  LabeledInputWrapper,
  Select,
  IOption,
  PopulatedAppBar,
  LabeledCheckbox
} from "njm-react-component-library";

class App extends React.Component {
  public readonly state = {
    currentOption: { label: "hi", value: "Hi" }
  };

  public handleChange = (option: IOption) =>
    this.setState({ currentOption: option });

  public defaultFunc = () => {
    return;
  };

  public handleClick = () => {
    return;
  };

  public render() {
    const options = [
      { label: "hi", value: "Hi" },
      { label: "bye", value: "Bye" }
    ];
    return (
      <div className="App">
        <PopulatedAppBar
          appName={"Component Library"}
          isAuthenticated={true}
          onSignInClick={this.defaultFunc}
          onLogOutClick={this.defaultFunc}
        />
        <Button>Testing 1i!</Button>
        <LabeledInputWrapper>Testing</LabeledInputWrapper>
        <Select
          options={options}
          currentOption={this.state.currentOption}
          onChange={this.handleChange}
        />
        <LabeledCheckbox
          option={options[0]}
          onClick={this.handleClick}
          isToggled={false}
        />
      </div>
    );
  }
}

export default App;
