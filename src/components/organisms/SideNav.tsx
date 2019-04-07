import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import styled from "styled-components";
import { ThemeContext } from "../../styleConstants";
import { StyleConstant } from "../../typeUtilities";
import { Link, Typography } from "../atoms";
import { Collapse } from "react-collapse";
/* tslint:disable-next-line */
const equal = require("fast-deep-equal");

const SideNavInternal: React.SFC<Props & RouteComponentProps> = ({
  navInfos,
  location
}) => {
  const { pathname: currentRoute } = location;
  const { colors, transitions, spacing, boxShadow } = React.useContext(
    ThemeContext
  );

  const renderNavLink = (
    navLink: INavLink,
    marginLeft: string,
    i: number
  ): React.ReactNode => {
    return (
      <NavElement
        spacing={spacing}
        colors={colors}
        transitions={transitions}
        key={`nav-element-${i}`}>
        <Link
          route={navLink.route}
          styleVariant={
            currentRoute === navLink.route ? "primary" : "secondary"
          }
          typographyProps={{ style: { marginLeft } }}
          style={{
            width: "100%",
            height: "100%",
            padding: `${spacing.ss3} 0`
          }}>
          {navLink.label}
        </Link>
      </NavElement>
    );
  };

  const navItems: React.ReactNodeArray = [];

  const isFolder = (
    navElementOrFolder: INavLink | FolderInfo
  ): navElementOrFolder is FolderInfo => {
    return (navElementOrFolder as FolderInfo).navLinks !== undefined;
  };

  navInfos.map((navInfo, i) => {
    navItems.push(
      isFolder(navInfo) ? (
        <Folder
          folderInfo={navInfo}
          renderNavLink={renderNavLink}
          key={`folder-${i}`}
          currentRoute={currentRoute}
        />
      ) : (
        renderNavLink(navInfo, spacing.ss4, i)
      )
    );
  });

  // TODO: clean up
  const [headerOffset, setHeaderOffset] = React.useState(64);
  const [footerOffset, setFooterOffset] = React.useState(52);
  const handleScroll = () => {
    if (window.scrollY < 64) {
      setHeaderOffset(64);
    } else if (headerOffset !== 0) {
      setHeaderOffset(0);
    }

    if (document.body.scrollHeight - window.scrollY - window.innerHeight < 52) {
      setFooterOffset(52);
    } else if (footerOffset !== 0) {
      setFooterOffset(0);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div
      style={{
        width: spacing.ss64,
        boxShadow: boxShadow.bs1
      }}>
      <Nav
        spacing={spacing}
        boxShadow={boxShadow}
        headerOffset={headerOffset}
        footerOffset={footerOffset}>
        <div>{navItems}</div>
      </Nav>
    </div>
  );
};

export const SideNav = withRouter(SideNavInternal);

const Nav = styled("nav")<{
  spacing: StyleConstant<"spacing">;
  boxShadow: StyleConstant<"boxShadow">;
  headerOffset: number;
  footerOffset: number;
}>`
  display: flex;
  position: sticky;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  height: calc(100vh - ${p => p.headerOffset}px - ${p => p.footerOffset}px);
  flex-direction: column;
  margin-top: ${p => p.spacing.ss4};
`;

const NavElement = styled("div")<{
  colors: StyleConstant<"colors">;
  transitions: StyleConstant<"transitions">;
  spacing: StyleConstant<"spacing">;
}>`
  cursor: pointer;
  width: ${p => p.spacing.ss64};
  transition: background-color ${p => p.transitions.medium};
  &:hover {
    background-color: ${p => p.colors.neutral.cs2};
    transition: background-color ${p => p.transitions.medium};
  }
`;

const FolderLabel: React.SFC<{ spacing: StyleConstant<"spacing"> }> = ({
  spacing,
  children
}) => (
  <LabelWrapper spacing={spacing}>
    <Typography weightVariant={5}>{children}</Typography>
  </LabelWrapper>
);

const LabelWrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  padding: ${p => p.spacing.ss3} 0;
  margin-left: ${p => p.spacing.ss4};
`;

const Folder: React.SFC<{
  folderInfo: FolderInfo;
  renderNavLink: (
    navInfo: INavLink,
    marginLeft: string,
    i: number
  ) => React.ReactNode;
  currentRoute: string;
}> = React.memo(
  ({ folderInfo, renderNavLink, currentRoute }) => {
    const initialExpansionState = folderInfo.navLinks
      .map(nl => nl.route)
      .reduce((agg, cur) => {
        return agg || currentRoute === cur;
      }, false);
    const [isExpanded, setIsExpanded] = React.useState(initialExpansionState);
    const toggleIsExpanded = () => setIsExpanded(prev => !prev);
    const { spacing, colors, transitions } = React.useContext(ThemeContext);
    const innerNavLinkRef = React.useRef<HTMLDivElement>(null);
    return (
      <>
        <NavElement
          spacing={spacing}
          colors={colors}
          transitions={transitions}
          onClick={toggleIsExpanded}>
          <FolderLabel spacing={spacing}>{folderInfo.label}</FolderLabel>
        </NavElement>
        <Collapse isOpened={isExpanded} springConfig={{ stiffness: 220 }}>
          <div ref={innerNavLinkRef}>
            {folderInfo.navLinks.map((nl, i) =>
              renderNavLink(nl, spacing.ss8, i)
            )}
          </div>
        </Collapse>
      </>
    );
  },
  (prevProps, nextProps) => {
    const doesFolderContainChangingLink = (
      folderInfo: FolderInfo,
      folderPrevProps: typeof prevProps,
      folderNextProps: typeof nextProps
    ) =>
      folderInfo.navLinks.some(
        nl =>
          nl.route === folderNextProps.currentRoute ||
          nl.route === folderPrevProps.currentRoute
      );

    return (
      equal(prevProps.folderInfo, nextProps.folderInfo) &&
      !doesFolderContainChangingLink(
        nextProps.folderInfo,
        prevProps,
        nextProps
      ) &&
      !doesFolderContainChangingLink(prevProps.folderInfo, prevProps, nextProps)
    );
  }
);

// types
export type NavItemProps = { label: string; route?: string };

type FolderInfo = {
  label: string;
  navLinks: INavLink[];
};

interface INavLink {
  label: string;
  route: string;
}

interface Props {
  navInfos: Array<FolderInfo | INavLink>;
}
