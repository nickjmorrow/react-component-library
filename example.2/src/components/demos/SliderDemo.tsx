import * as React from "react";
import "rc-slider/assets/index.css";
// TODO: this should be inline or not need to be created in subscribing packages
import { Slider, Typography } from "react-component-library";
import styled from "styled-components";

export const SliderDemo: React.SFC = () => {
  const [value, setValue] = React.useState(50);
  return (
    <>
      <Typography styleVariant={1}>Slider</Typography>
      <Wrapper>
        <Slider value={value} onChange={setValue} min={2} max={100} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 200px;
`;
