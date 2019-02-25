import { LoadingButton, Button } from "njm-react-component-library";
import * as React from "react";
import styled from "styled-components";

export const Buttons: React.SFC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const toggleIsLoading = () => setIsLoading(!isLoading);

  return (
    <Wrapper>
      <Button colorVariant="core">Core</Button>
      <Button colorVariant="accent">Accent</Button>

      <Button colorVariant="success">Success</Button>
      <Button colorVariant="warning">Warning</Button>
      <Button colorVariant="danger">Cancel</Button>
      <Button
        colorVariant="accent"
        styleVariant="secondary"
        textColorVariant="accent">
        Secondary
      </Button>
      <Button colorVariant="white" textColorVariant="core">
        White
      </Button>
      <LoadingButton
        isLoading={isLoading}
        onClick={toggleIsLoading}
        textColorVariant={"primaryLight"}>
        I'm loading
      </LoadingButton>
      <LoadingButton
        isLoading={isLoading}
        onClick={toggleIsLoading}
        styleVariant={"secondary"}
        textColorVariant={"core"}>
        I'm loading
      </LoadingButton>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
