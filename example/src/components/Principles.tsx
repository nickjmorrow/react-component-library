import * as React from "react";
import { Typography } from "@nickjmorrow/react-component-library";

export const Principles: React.FC = () => {
  return (
    <>
      <Typography styleVariant={1}>Principles</Typography>
	  <Typography styleVariant={2}>Customization and Escape Hatches</Typography>
	  <Typography>First and foremost, this component library should always allow for departures from the style guidelines. All components should support custom colors and other styling where applicable.</Typography>
	  <Typography styleVariant={2}>Decision Making</Typography>
	  <Typography>At a high level, decisions should be able to be made regarding common style guidelines like coloring, spacing, and fonts. This should be mapped to the use cases of part of a style - colors are "success" or "core". Decisions can be made to map "success" to a shade of green and "core" to a shade of blue. These decisions should then be respected by all components by default - e.g. we should be able to pass a prop into a button component to denote its color as "success", and that color should respect the overarching decision for what color "success" should be. This helps to keep component styles in sync and reduces the number of unique decisions that must be made. </Typography>
    </>
  );
};
