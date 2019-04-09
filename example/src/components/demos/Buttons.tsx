import * as React from "react";
import {
  Button,
  Typography,
  GoogleButton,
  LinkedInButton,
  FacebookButton
} from "react-component-library";
import styled from "styled-components";
import { DisplayPaper } from "../DisplayPaper";

export const Buttons: React.SFC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const toggleIsLoading = () => setIsLoading(!isLoading);

  return (
    <Wrapper>
      <Typography styleVariant={1}>Buttons</Typography>
      <Typography styleVariant={2}>Style Variants</Typography>
      <Typography styleVariant={3}>Primary</Typography>
      <DisplayPaper>
        <Button colorVariant="core">Core</Button>
        <Button colorVariant="accent">Accent</Button>
        <Button colorVariant="success">Success</Button>
        <Button colorVariant="warning">Warning</Button>
        <Button colorVariant="danger">Danger</Button>
      </DisplayPaper>
      <Typography styleVariant={3}>Secondary</Typography>
      <DisplayPaper>
        <Button
          styleVariant="secondary"
          textColorVariant="core"
          colorVariant="core"
          useMargin={true}>
          Core
        </Button>
        <Button
          styleVariant="secondary"
          textColorVariant="accent"
          colorVariant="accent"
          useMargin={true}>
          Accent
        </Button>
        <Button
          textColorVariant="success"
          styleVariant="secondary"
          colorVariant="success"
          useMargin={true}>
          Success
        </Button>
        <Button
          textColorVariant="warning"
          styleVariant="secondary"
          colorVariant="warning"
          useMargin={true}>
          Warning
        </Button>
        <Button
          textColorVariant="danger"
          styleVariant="secondary"
          colorVariant="danger"
          useMargin={true}>
          Danger
        </Button>
      </DisplayPaper>
      <Typography styleVariant={3}>Tertiary</Typography>
      <DisplayPaper>
        <Button
          styleVariant="tertiary"
          textColorVariant="core"
          colorVariant="core">
          Core
        </Button>
        <Button
          styleVariant="tertiary"
          textColorVariant="accent"
          colorVariant="accent">
          Accent
        </Button>
        <Button
          textColorVariant="success"
          styleVariant="tertiary"
          colorVariant="success">
          Success
        </Button>
        <Button
          textColorVariant="warning"
          styleVariant="tertiary"
          colorVariant="warning">
          Warning
        </Button>
        <Button
          textColorVariant="danger"
          styleVariant="tertiary"
          colorVariant="danger">
          Danger
        </Button>
      </DisplayPaper>
      <Typography styleVariant={2}>Other Props</Typography>
      <Typography styleVariant={3}>Loading</Typography>
      <DisplayPaper>
        <Button
          isLoading={isLoading}
          onClick={toggleIsLoading}
          textColorVariant={"primaryLight"}>
          He's loading!
        </Button>
        <Button
          isLoading={isLoading}
          onClick={toggleIsLoading}
          styleVariant={"secondary"}
          textColorVariant={"core"}>
          I'm loading
        </Button>
      </DisplayPaper>
      <Typography styleVariant={3}>Link Buttons</Typography>
      <DisplayPaper>
        <GoogleButton link={"http://google.com"}>Google</GoogleButton>
        <FacebookButton link={"http://facebook.com"}>Facebook</FacebookButton>
        <LinkedInButton link={"http://linkedin.com"}>LinkedIn</LinkedInButton>
      </DisplayPaper>
      <Typography styleVariant={3}>Disabled</Typography>
      <DisplayPaper>
        <Button isDisabled={true} styleVariant={"primary"}>
          Primary
        </Button>
        <Button isDisabled={true} styleVariant={"secondary"}>
          Secondary
        </Button>
        <Button isDisabled={true} styleVariant={"tertiary"}>
          Tertiary
        </Button>
      </DisplayPaper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
