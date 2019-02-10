import * as React from "react";
import { Button } from "njm-react-component-library";
import styled from "styled-components";
import { googleColors } from "njm-react-component-library";

export const Buttons: React.SFC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const toggleIsLoading = () => setIsLoading(!isLoading);
  

  return (
    <Wrapper>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="cancel">Cancel</Button>
      <Button
        colorSet={{
          backgroundColor: googleColors.googleRed,
          backgroundColorActive: googleColors.googleRedLight,
          backgroundColorHover: googleColors.googleRedDark
        }}>
        Google
      </Button>
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
      <Button isLoading={isLoading} onClick={toggleIsLoading}>
        Something
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
