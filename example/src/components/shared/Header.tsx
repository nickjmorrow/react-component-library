import * as React from "react";
import { Typography, ThemeContext } from "react-component-library";

export const Header: React.FC = ({ children }) => {
  const { spacing } = React.useContext(ThemeContext);
  return (
    <div>
      <Typography
        sizeVariant={5}
        weightVariant={1}
        colorVariant={"secondaryDark"}
        style={{ marginBottom: spacing.ss4 }}>
        {children}
      </Typography>
    </div>
  );
};
