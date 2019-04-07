import * as React from "react";
import {
  Typography,
  StyleConstant,
  ThemeContext
} from "react-component-library";
import { DisplayPaper } from "src/components/DisplayPaper";
import styled from "styled-components";

export const SpacingDemo: React.FC = () => {
  const { spacing, colors } = React.useContext(ThemeContext);

  const renderBar = (width: string) => (
    <Bar spacing={spacing} colors={colors} width={width} />
  );

  return (
    <React.Fragment>
      <Typography styleVariant={1}>Spacing</Typography>
      <DisplayPaper
        customStyle={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "none",
          justifyContent: "none"
        }}>
        <div>
          <div
            style={{
              display: "grid",
              gridAutoFlow: "row",
              gridRowGap: spacing.ss4,
              maxWidth: "800px",
              width: "min-content",
              height: "100%"
            }}>
            {Object.keys(spacing).map(key => (
              <Typography>{key}</Typography>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridAutoFlow: "row",
              gridRowGap: spacing.ss4,
              maxWidth: "800px",
              height: "100%"
            }}>
            {Object.keys(spacing).map(key => renderBar(spacing[key]))}
          </div>
        </div>
      </DisplayPaper>
    </React.Fragment>
  );
};

const Bar = styled("div")<{
  spacing: StyleConstant<"spacing">;
  width: string;
  colors: StyleConstant<"colors">;
}>`
  height: 25px;
  width: ${p => p.width};
  background-color: ${p => p.colors.accent.cs5};
`;
