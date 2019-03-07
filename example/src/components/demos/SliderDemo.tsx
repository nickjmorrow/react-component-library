import * as React from "react";
import "rc-slider/assets/index.css";
import { Slider } from "react-component-library";
import styled from "styled-components";

export const SliderDemo: React.SFC = () => {
  const [value, setValue] = React.useState(50);
  return (
    <Wrapper>
      <Slider value={value} onChange={setValue} min={2} max={100} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
`;
