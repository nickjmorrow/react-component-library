import * as React from "react";
import {} from "njm-react-component-library";
import styled from "styled-components";
import { Button, googleColors } from "njm-react-component-library";

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
          backgroundColor: googleColors.main,
          backgroundColorActive: googleColors.dark,
          backgroundColorHover: googleColors.light
        }}>
        Google
      </Button>
      <Button variant="white" color="primary">
        White
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
        I'm loading
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
