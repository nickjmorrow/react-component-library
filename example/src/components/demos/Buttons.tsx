import * as React from "react";
import {} from "njm-react-component-library";
import styled from "styled-components";
import { Button, googleColors } from "njm-react-component-library";

export const Buttons: React.SFC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const toggleIsLoading = () => setIsLoading(!isLoading);

  return (
    <Wrapper>
      <Button colorVariant="primary">Primary</Button>
      <Button
        colorVariant="secondary"
        styleVariant="outline"
        textColorVariant="secondary">
        Secondary
      </Button>
      <Button colorVariant="cancel">Cancel</Button>
      <Button
        colorSet={{
          backgroundColor: googleColors.main,
          backgroundColorActive: googleColors.dark,
          backgroundColorHover: googleColors.light
        }}>
        Google
      </Button>
      <Button colorVariant="white" textColorVariant="primary">
        White
      </Button>
      <div
        style={{
          backgroundColor: "turquoise",
          padding: "6px",
          width: "max-content"
        }}>
        <Button colorVariant="transparent">Transparent</Button>
      </div>
      <Button isLoading={isLoading} onClick={toggleIsLoading}>
        I'm loading
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
