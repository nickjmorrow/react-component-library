import * as React from "react";
import { Button } from "njm-react-component-library";
import styled from "styled-components";

export const Buttons: React.SFC = () => {
  return (
    <Wrapper>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="cancel">Cancel</Button>
      <Button variant="google">Google</Button>
      <Button variant="white" color="primary">
        White with Primary
      </Button>
      <div
        style={{
          backgroundColor: "turquoise",
          padding: "6px",
          width: "max-content"
        }}>
        <Button variant="transparent">Transparent</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
