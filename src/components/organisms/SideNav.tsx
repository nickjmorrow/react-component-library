import * as React from 'react';
import { Collapse } from 'react-collapse';
import styled from 'styled-components';
import { useThemeContext } from '../../styleConstants';
import { Theme } from '../../typeUtilities';
import { ColorVariant, Link, Typography } from '../atoms';

export const SideNav: React.SFC<{
    navInfos: (FolderInfo | INavLink)[];
    currentRoute: string;
    onLinkClick?: () => void;
    defaultExpanded?: boolean;
    styleApi?: {
        wrapperStyle?: React.CSSProperties;
        navLinkStyle?: React.CSSProperties;
        folderStyle?: React.CSSProperties;
        navStyle?: React.CSSProperties;
    };
}> = ({
    navInfos,
    onLinkClick: handleLinkClick = () => {
        return;
    },
    styleApi = {},
    currentRoute,
    defaultExpanded = false,
}) => {
    const getColorVariant = (nl: INavLink): ColorVariant => (nl.route === currentRoute ? 'core' : 'primaryDark');
    const theme = useThemeContext();
    return (
        <div>
            <nav
                style={{
                    display: 'flex',
                    position: 'sticky',
                    top: '0px',
                    bottom: '0px',
                    overflowY: 'auto',
                    marginBottom: theme.spacing.ss8,
                    flexDirection: 'column',
                    marginTop: theme.spacing.ss4,
                    ...styleApi.navStyle,
                }}
            >
                <div>
                    {navInfos.map(ni =>
                        isFolder(ni) ? (
                            <Folder
                                folderInfo={ni}
                                key={`folder-${ni.label}`}
                                getColorVariant={getColorVariant}
                                isInitiallyExpanded={
                                    defaultExpanded ||
                                    ni.navLinks
                                        .map(nl => nl.route)
                                        .reduce((agg, cur) => {
                                            return agg || currentRoute === cur;
                                        }, false)
                                }
                                style={styleApi.folderStyle}
                                onClick={handleLinkClick}
                            />
                        ) : (
                            <NavLink
                                key={`nav-link-${ni.label}`}
                                style={styleApi.navLinkStyle}
                                navLink={ni}
                                onClick={handleLinkClick}
                                colorVariant={getColorVariant(ni)}
                            />
                        ),
                    )}
                </div>
            </nav>
        </div>
    );
};

const NavLink: React.FC<{
    navLink: INavLink;
    style?: React.CSSProperties;
    onClick?: () => void;
    colorVariant: ColorVariant;
}> = ({ navLink, onClick, style, colorVariant, ...props }) => {
    const theme = useThemeContext();
    return (
        <NavElement theme={theme} key={`nav-element-${navLink.route}`} onClick={onClick}>
            <Link
                route={navLink.route}
                typographyProps={{ colorVariant: colorVariant }}
                style={{
                    width: '100%',
                    height: '100%',
                    padding: theme.spacing.ss4,
                    ...style,
                }}
                {...props}
            >
                {navLink.label}
            </Link>
        </NavElement>
    );
};

const Folder: React.SFC<{
    folderInfo: FolderInfo;
    isInitiallyExpanded: boolean;
    getColorVariant: (nl: INavLink) => ColorVariant;
    style?: React.CSSProperties;
    onClick: () => void;
}> = ({ folderInfo, isInitiallyExpanded, getColorVariant, style, onClick }) => {
    const theme = useThemeContext();
    const [isExpanded, setIsExpanded] = React.useState(isInitiallyExpanded);
    const toggleIsExpanded = () => setIsExpanded(prev => !prev);
    return (
        <>
            <NavElement onClick={toggleIsExpanded} style={style} theme={theme}>
                <div style={{ padding: theme.spacing.ss4 }}>
                    <Typography weightVariant={5}>{folderInfo.label}</Typography>
                </div>
            </NavElement>
            <Collapse isOpened={isExpanded} springConfig={{ stiffness: 220 }}>
                <div>
                    {folderInfo.navLinks.map(nl => (
                        <NavLink
                            key={nl.route}
                            navLink={nl}
                            onClick={onClick}
                            colorVariant={getColorVariant(nl)}
                            style={{ paddingLeft: theme.spacing.ss8 }}
                        />
                    ))}
                </div>
            </Collapse>
        </>
    );
};

// helpers
const isFolder = (navElementOrFolder: INavLink | FolderInfo): navElementOrFolder is FolderInfo =>
    (navElementOrFolder as FolderInfo).navLinks !== undefined;

// types
export interface FolderInfo {
    label: string;
    navLinks: INavLink[];
}

export interface INavLink {
    label: string;
    route: string;
}

const NavElement = styled('div')<{
    style?: React.CSSProperties;
    theme: Theme;
}>`
    cursor: pointer;
    width: ${p => p.theme.spacing.ss64};
    transition: background-color ${p => p.theme.transitions.medium};
    &:hover {
        background-color: ${p => p.theme.colors.neutral.cs2};
        transition: background-color ${p => p.theme.transitions.medium};
    }
    &:active {
        background-color: ${p => p.theme.colors.neutral.cs3};
        transition: background-color ${p => p.theme.transitions.medium};
    }
`;
