import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import * as React from "react";
import styled from "styled-components";
import { border, colors, transitions } from "./Core/styleConstants";
import { Typography } from "./Core/components/atoms/Typography";

interface IProps {
  value: number;
  min: number;
  max: number;
  onChange(value: number): void;
}

const initialState = {
  isClicking: false
};

type IState = typeof initialState;

export class RcSlider extends React.Component<IProps, IState> {
  readonly state = initialState;

  handleBeforeChange = () => this.setState({ isClicking: true });
  handleAfterChange = () => this.setState({ isClicking: false });

  render() {
    const { onChange: handleChange, value, min, max } = this.props;
    const { isClicking } = this.state;
    const handleStyle = {
      border: border.bold,
      boxShadow: isClicking ? `0 0 5px ${colors.primary}` : "none",
      backgroundColor: colors.primary.lightest,
      transition: `box-shadow ${transitions.medium}`
    };

    return (
      <Wrapper>
        <Slider
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          handleStyle={handleStyle}
          railStyle={{
            backgroundColor: colors.gray
          }}
          trackStyle={{ backgroundColor: colors.primary }}
          onBeforeChange={this.handleBeforeChange}
          onAfterChange={this.handleAfterChange}
        />
        <ValueWrapper>
          <Typography variant="h4">{value}</Typography>
        </ValueWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ValueWrapper = styled.div`
  margin-left: 12px;
`;
