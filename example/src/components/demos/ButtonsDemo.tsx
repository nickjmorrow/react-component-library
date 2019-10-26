import * as React from "react";
import {
  Button,
  Typography,
  GoogleButton,
  LinkedInButton,
  FacebookButton,
  MenuButton
} from "@nickjmorrow/react-component-library";
import styled from "styled-components";
import { DisplayPaper } from "../DisplayPaper";

export const ButtonsDemo: React.SFC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const toggleIsLoading = () => setIsLoading(!isLoading);

  return (
    <Wrapper>
      <Typography styleVariant={"h1"}>Buttons</Typography>
      <Typography styleVariant={"h2"}>Style Variants</Typography>
      <Typography styleVariant={"h3"}>Primary</Typography>
      <DisplayPaper>
        <Button colorVariant="core">Hey</Button>
        <Button colorVariant="accent">Accent</Button>
        <Button colorVariant="success">Success</Button>
        <Button colorVariant="warning">Warning</Button>
        <Button colorVariant="danger">Danger</Button>
      </DisplayPaper>
      <Typography styleVariant={"h3"}>Secondary</Typography>
      <DisplayPaper>
        <Button
          styleVariant={2}
          textColorVariant="core"
          colorVariant="core"
          useMargin={true}
        >
          Core
        </Button>
        <Button
          styleVariant={2}
          textColorVariant="accent"
          colorVariant="accent"
          useMargin={true}
        >
          Accent
        </Button>
        <Button
          textColorVariant="success"
          styleVariant={2}
          colorVariant="success"
          useMargin={true}
        >
          Success
        </Button>
        <Button
          textColorVariant="warning"
          styleVariant={2}
          colorVariant="warning"
          useMargin={true}
        >
          Warning
        </Button>
        <Button
          textColorVariant="danger"
          styleVariant={2}
          colorVariant="danger"
          useMargin={true}
        >
          Danger
        </Button>
      </DisplayPaper>
      <Typography styleVariant={"h3"}>Tertiary</Typography>
      <DisplayPaper>
        <Button styleVariant={3} textColorVariant="core" colorVariant="core">
          Core
        </Button>
        <Button
          styleVariant={3}
          textColorVariant="accent"
          colorVariant="accent"
        >
          Accent
        </Button>
        <Button
          textColorVariant="success"
          styleVariant={3}
          colorVariant="success"
        >
          Success
        </Button>
        <Button
          textColorVariant="warning"
          styleVariant={3}
          colorVariant="warning"
        >
          Warning
        </Button>
        <Button
          textColorVariant="danger"
          styleVariant={3}
          colorVariant="danger"
        >
          Danger
        </Button>
      </DisplayPaper>
      <Typography styleVariant={"h2"}>Other Props</Typography>
      <Typography styleVariant={"h3"}>Loading</Typography>
      <DisplayPaper>
        <Button
          isLoading={isLoading}
          onClick={toggleIsLoading}
          textColorVariant={"primaryLight"}
        >
          He's loading!
        </Button>
        <Button
          isLoading={isLoading}
          onClick={toggleIsLoading}
          styleVariant={2}
          textColorVariant={"core"}
        >
          I'm loading
        </Button>
      </DisplayPaper>
      <Typography styleVariant={"h3"}>Link Buttons</Typography>
      <DisplayPaper>
        <GoogleButton link={"http://google.com"}>Google</GoogleButton>
        <FacebookButton link={"http://facebook.com"}>Facebook</FacebookButton>
        <LinkedInButton link={"http://linkedin.com"}>LinkedIn</LinkedInButton>
      </DisplayPaper>
      <Typography styleVariant={"h3"}>Disabled</Typography>
      <DisplayPaper>
        <Button isDisabled={true} styleVariant={1}>
          Primary
        </Button>
        <Button isDisabled={true} styleVariant={2}>
          Secondary
        </Button>
        <Button isDisabled={true} styleVariant={3}>
          Tertiary
        </Button>
      </DisplayPaper>
      <Typography styleVariant={"h3"}>Menu Button</Typography>
      <DisplayPaper
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridColumnGap: "64px"
        }}
      >
        <MenuButton
          navLinks={[
            { label: "Dog", route: "/dog" },
            { label: "Cat", route: "/cat" }
          ]}
          align={"right"}
        />
      </DisplayPaper>
      <Typography styleVariant={"h3"}>Custom Buttons</Typography>
      <DisplayPaper>
        <Button
          style={{
            backgroundImage: "linear-gradient(120deg, purple, pink)",
            border: "none"
          }}
        >
          Gradient
        </Button>
        <CustomButton weightVariant={7}>Styled Button</CustomButton>
      </DisplayPaper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CustomButton = styled(Button)`
  background-image: linear-gradient(120deg, pink, purple);
  border: none;
  color: white;
  font-weight: 700;
  transition: filter 100ms;
  &:hover {
    filter: brightness(120%);
    transition: filter 100ms linear;
  }
`;
