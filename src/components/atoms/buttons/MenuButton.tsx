import * as React from "react";
import {
  ColorVariant,
  Fade,
  StyledOption,
  StyledOptionList,
  Typography
} from "~/components";
import { useThemeContext } from "~/styleConstants";
import { MenuIcon } from "../icons";
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
    <>
      <MenuIcon
        colorVariant={colorVariant}
        onClick={() => setIsMenuVisible(isVisible => !isVisible)}
        style={styleApi.iconStyle}
      />
      <Fade
        in={isMenuVisible}
        style={{ position: "absolute", zIndex: 5 }}
        mountOnEnter={true}
        unmountOnExit={true}
        mounted={{ transform: "translateY(0px)" }}
        unmounted={{ transform: "translateY(-180px)" }}
        styleKeys={["transform"]}>
        <StyledOptionList
          style={{
            marginLeft: align === "left" ? "-122px" : "0px",
            right: "0px",
            ...styleApi.styledOptionList,
            width:
              (styleApi.styledOptionList && styleApi.styledOptionList.width) ||
              "min-content",
            zIndex: isMenuVisible ? 99 : -1
          }}>
          {navLinks.map(nl => (
            <Link route={nl.route} onClick={() => setIsMenuVisible(false)}>
              <StyledOption style={{ minWidth: finalOptionWidth }}>
                <Typography>{nl.label}</Typography>
              </StyledOption>
            </Link>
          ))}
        </StyledOptionList>
      </Fade>
    </>
  );
};
