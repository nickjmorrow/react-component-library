import * as React from "react";
import styled from "styled-components";
import { colors, transitions } from "~/styleConstants";
import { IOption } from "types";
import { Option } from "./Option";
import { Typography } from "~/components/atoms/Typography";

export class Select extends React.Component<OwnProps, IState> {
  readonly state = initialState;

  toggleIsMenuVisible = () => {
    this.setState(prevState => ({
      isMenuVisible: !prevState.isMenuVisible
    }));
  };

  closeMenu = () => {
    this.setState({
      isMenuVisible: false
    });
  };

  handleClickOption = (option: IOption) => {
    this.setState({
      isMenuVisible: false
    });
    this.props.onChange(option);
  };

  componentDidMount = () => {
    const { currentOption, options } = this.props;

    const newOptions = currentOption ? options : [...options, noneChosenOption];
    this.setState({
      options: newOptions
    });
  };

  render() {
    const {
      currentOption,
      removeNoneOptionAfterSelection: includeNoneOptionAfterSelection
    } = this.props;
    const { isMenuVisible, options } = this.state;

    const newCurrentOption = currentOption || noneChosenOption;
    const newOptions =
      includeNoneOptionAfterSelection && currentOption
        ? options.filter(o => o.value !== noneChosenOption.value)
        : options;

    return (
      <Wrapper onMouseLeave={this.closeMenu}>
        <StyledSelect onClick={this.toggleIsMenuVisible}>
          <Typography>{newCurrentOption.label}</Typography>
        </StyledSelect>
        {isMenuVisible && (
          <Options>
            {newOptions
              .filter(o => o.value !== newCurrentOption.value)
              .map(o => (
                <Option
                  key={o.value}
                  onClick={this.handleClickOption}
                  option={o}
                />
              ))}
          </Options>
        )}
      </Wrapper>
    );
  }
}

const noneChosenOption = { value: "N/A", label: "N/A" };

const Wrapper = styled.div`
  width: 10rem;
`;

const Options = styled.div`
  background-color: ${colors.white};
  width: inherit;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  border: 1px solid ${colors.gray.light};
`;

const StyledSelect = styled.div`
  font-size: 16px;
  background-color: ${colors.white};
  border: none;
  outline: none;
  width: 10rem;
  appearance: none;
  text-indent: 1px;
  text-overflow: "";
  border-bottom: 1px solid ${colors.white};
  &:hover {
    border-bottom: 1px solid ${colors.gray.dark};
    transition: ${transitions.fast};
    cursor: pointer;
  }
`;

interface OwnProps {
  options: IOption[];
  currentOption: IOption | null;
  removeNoneOptionAfterSelection?: boolean;
  onChange(option: IOption): void;
}

const initialState = {
  isMenuVisible: false,
  currentOption: null as IOption | null,
  options: [] as IOption[]
};

type IState = typeof initialState;
