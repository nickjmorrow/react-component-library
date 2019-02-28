import {
  Button,
  Paper,
  ThemeContext,
  Typography,
  Select,
  IOption
} from "njm-react-component-library";
import * as React from "react";
import styled from "styled-components";

export const Buttons: React.SFC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const toggleIsLoading = () => setIsLoading(!isLoading);

  const { spacing, colors } = React.useContext(ThemeContext);

  const options: IOption[] = [
    {
      label: "light",
      value: colors.neutral.lightest
    },
    { label: "medium", value: colors.neutral.main },
    { label: "dark", value: colors.neutral.dark }
  ];

  const [option, setOption] = React.useState(options[0]);

  const handleChange = (newOption: IOption) => setOption(newOption);

  const renderButtonGroupHeader = (header: string) => (
    <Typography
      sizeVariant={5}
      colorVariant={"secondaryDark"}
      style={{ marginBottom: spacing.ss3 }}>
      {header}
    </Typography>
  );

  const renderSectionHeader = (header: string) => (
    <div>
      <Typography
        sizeVariant={6}
        weightVariant={2}
        style={{ marginBottom: spacing.ss4 }}>
        {header}
      </Typography>
    </div>
  );

  const paperStyles = {
    marginBottom: spacing.ss12,
    width: "max-content",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-around",
    alignItems: "center",
    maxWidth: "700px",
    padding: spacing.ss3,
    backgroundColor: option.value as string
  };
  return (
    <Wrapper>
      <Paper style={{ ...paperStyles, display: "none" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: spacing.ss12
          }}>
          <Typography sizeVariant={4}>Change Paper Color</Typography>
          <Select
            options={options}
            onChange={handleChange}
            currentOption={option}
          />
        </div>
      </Paper>
      {renderSectionHeader("Style Variants")}
      {renderButtonGroupHeader("Primary")}
      <Paper style={paperStyles}>
        <Button colorVariant="core">Core</Button>
        <Button colorVariant="accent">Accent</Button>
        <Button colorVariant="success">Success</Button>
        <Button colorVariant="warning">Warning</Button>
        <Button colorVariant="danger">Cancel</Button>
      </Paper>
      {renderButtonGroupHeader("Secondary")}
      <Paper style={paperStyles}>
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
          Cancel
        </Button>
      </Paper>
      {renderButtonGroupHeader("Tertiary")}
      <Paper style={paperStyles}>
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
          Cancel
        </Button>
      </Paper>
      {renderSectionHeader("Other Props")}
      {renderButtonGroupHeader("Loading")}
      <Paper style={paperStyles}>
        <Button
          isLoading={isLoading}
          onClick={toggleIsLoading}
          textColorVariant={"primaryLight"}>
          I'm loading
        </Button>
        <Button
          isLoading={isLoading}
          onClick={toggleIsLoading}
          styleVariant={"secondary"}
          textColorVariant={"core"}>
          I'm loading
        </Button>
      </Paper>
      {renderButtonGroupHeader("Link Buttons")}
      <Paper style={paperStyles}>
        <Button colorVariant={"accent"} link={"google.com"}>
          Google
        </Button>
        <Button link={"facebook.com"}>Facebook</Button>
        <Button colorVariant={"success"} link={"instagram.com"}>
          Instagram
        </Button>
      </Paper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
