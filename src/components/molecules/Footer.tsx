import * as React from "react";
import styled from "styled-components";
import { fullName, githubLink } from "~/constants";
import { getStyles, ThemeContext } from "~/styleConstants";
import { GithubIcon, InvisibleLink } from "../atoms";
import { Typography } from "../atoms/Typography";

const currentYear = new Date().getFullYear();
const defaultText = `© ${currentYear} ${fullName}`;

export const Footer: React.SFC<IOwnProps> = ({ text = defaultText }) => {
  const { theme } = React.useContext(ThemeContext);
  const { colors, spacing } = getStyles(theme);
  return (
    <StyledFooter colors={colors} spacing={spacing}>
      <Typography colorVariant="textSecondaryDark" sizeVariant={2}>
        {text}
      </Typography>
      <InvisibleLink href={githubLink}>
        <GithubIcon sizeVariant={2} colorVariant={"secondaryDark"} />
      </InvisibleLink>
    </StyledFooter>
  );
};

interface DisplayProps {
  colors: ReturnType<typeof getStyles>["colors"];
  spacing: ReturnType<typeof getStyles>["spacing"];
}

const StyledFooter = styled("div")<DisplayProps>`
  background-color: ${p => p.colors.neutral.lightest};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.spacing[2]};
  width: 100%;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
`;

interface IOwnProps {
  text?: string;
}
