import * as React from "react";
import {
  Toggle,
  Typography,
  ThemeContext,
  ThemeInputsContext,
  ArgumentType,
  Button
} from "@nickjmorrow/react-component-library";
import { DescriptionContainer } from "../../../components/shared";

export const StyleConstants: React.FC = () => {
  const { defaultShowBoxShadow } = React.useContext(ThemeContext);

  const { updateThemeInputs } = React.useContext(ThemeInputsContext);

  const handleToggleBoxShadow = (isToggled: boolean) => {
    const newThemeInput: ArgumentType<typeof updateThemeInputs>[0] = {
      defaultShowBoxShadow: !defaultShowBoxShadow
    };
    updateThemeInputs(newThemeInput);
  };

  // TODO: figure out weird spacing / formatting issues
  return (
    <>
      <Typography styleVariant={1}>Style Constants</Typography>
      <DescriptionContainer>
        <Typography>
          There are miscellaneous flags and settings that are centralized within
          the component system and consumed by certain components. For instance,
          all components that have a box-shadow will check the
          `defaultShouldShowBoxShadow` flag. These settings can be changed by
          consuming applications.
        </Typography>
      </DescriptionContainer>
      <Typography styleVariant={2}>Default Should Show Box Shadow</Typography>
      <div style={{ display: "grid", gridAutoFlow: "row", gridRowGap: "8px" }}>
        <Toggle
          isToggled={defaultShowBoxShadow}
          onClick={handleToggleBoxShadow}
        />
        <Button
          onClick={() => {
            return;
          }}
          style={{ width: "max-content" }}
          useMargin={false}>
          Demo Button
        </Button>
      </div>
    </>
  );
};
