import * as React from "react";
import styled from "styled-components";
import { fullName, githubLink } from "~/constants";
import { ThemeContext } from "~/styleConstants";
import { GithubIcon, InvisibleLink } from "../atoms";
import { Typography } from "../atoms/typography/Typography";
import { StyleConstant } from "~/index";

const currentYear = new Date().getFullYear();
const defaultText = `© ${currentYear} ${fullName}`;

export const Footer: React.SFC<IOwnProps> = ({ text = defaultText }) => {
  const { colors, spacing } = React.useContext(ThemeContext);
  return (
    <StyledFooter colors={colors} spacing={spacing}>
      <Typography colorVariant="secondaryDark" sizeVariant={2}>
        {text}
      </Typography>
      <InvisibleLink href={githubLink}>
        <GithubIcon sizeVariant={2} colorVariant={"secondaryDark"} />
      </InvisibleLink>
    </StyledFooter>
  );
};

interface DisplayProps {
  colors: StyleConstant<"colors">;
  spacing: StyleConstant<"spacing">;
}

const StyledFooter = styled("div")<DisplayProps>`
  background-color: ${p => p.colors.neutral.lightest};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.spacing.ss2};
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
`;

interface IOwnProps {
  text?: string;
}
