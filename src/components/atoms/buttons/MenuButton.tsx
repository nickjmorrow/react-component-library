import * as React from "react";
import { MenuIcon } from "../icons";
import styled from "styled-components";
import { useThemeContext } from "~/styleConstants";
import {
  Typography,
  Fade,
  StyledOption,
  StyledOptionList,
  ColorVariant
} from "~/components";
import { Link } from "../Link";

export const MenuButton: React.FC<{
  navLinks: Array<{ label: string; route: string }>;
  align?: "left" | "right";
  optionMinWidth?: string;
  colorVariant?: ColorVariant;
  styleApi?: {
    iconStyle?: React.CSSProperties;
    styledOptionList?: React.CSSProperties;
  };
}> = ({
  navLinks,
  align = "left",
  optionMinWidth,
  colorVariant = "secondaryDark",
  styleApi = {}
}) => {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const { spacing } = useThemeContext();
  const finalOptionWidth = optionMinWidth || spacing.ss32;
  return (
    <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
      <MenuIcon
        colorVariant={colorVariant}
        onClick={() => setIsMenuVisible(isVisible => !isVisible)}
        style={styleApi.iconStyle}
      />
      <Fade in={isMenuVisible}>
        <MenuWrapper>
          <StyledOptionList
            style={{
              marginLeft: align === "left" ? "-122px" : "0px",
              ...styleApi.styledOptionList
            }}>
            {navLinks.map(nl => (
              <Link route={nl.route}>
                <StyledOption style={{ minWidth: finalOptionWidth }}>
                  <Typography>{nl.label}</Typography>
                </StyledOption>
              </Link>
            ))}
          </StyledOptionList>
        </MenuWrapper>
      </Fade>
    </div>
  );
};

const MenuWrapper = styled.div``;
