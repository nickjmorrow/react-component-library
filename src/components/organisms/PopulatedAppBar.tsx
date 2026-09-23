import * as React from 'react';
import {
    AppBar,
    Typography,
    GithubIcon,
    StyleVariant,
    ColorVariant,
    MenuIcon,
    MenuButton,
    InvisibleLink,
    LinkedInIcon,
} from '~/components/atoms';
import { mediaWidth, useMediaQuery, useThemeContext } from '~/theming';
import { MobileMenu } from './MobileMenu';
import { GetComponentProps } from '~/typeUtilities';
import { SideNav } from './SideNav';
import { Fade } from '../animations';

export const PopulatedAppBar: React.FC<{
    appName?: React.ReactNode;
    styleVariant?: StyleVariant;
    rightComponents?: React.ReactNode;
    leftComponents?: React.ReactNode;
    menuLength?: 'long' | 'short';
    navInfos?: GetComponentProps<typeof SideNav>['navInfos'];
    styledOptionWidth?: string;
    className?: string;
}> = ({
    appName,
    styleVariant = 1,
    leftComponents,
    rightComponents,
    navInfos = [],
    menuLength = 'long',
    styledOptionWidth,
    className,
}) => {
    const {
        spacing,
        appSettings: { githubUrl, appName: defaultAppName, linkedInUrl, appUrl },
    } = useThemeContext();
    const [isMenuVisible, setIsMenuVisible] = React.useState(false);
    const matches = useMediaQuery(`(max-width: ${mediaWidth.mobileLandscape})`);
    // On small screens with the full-screen menu, extra header controls move into that menu instead of
    // crowding the centered title.
    const showsMobileMenu = matches && navInfos.length > 0 && menuLength === 'long';
    const finalAppName = appName === undefined ? defaultAppName : appName;

    const iconStyle = {
        position: 'absolute',
        right: '0px',
        cursor: 'pointer',
        top: '14px',
    };
    return (
        <AppBar
            style={{ justifyContent: matches ? 'center' : 'space-between' }}
            styleVariant={styleVariant}
            className={className}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <InvisibleLink href={appUrl}>
                    <Typography
                        sizeVariant={7}
                        weightVariant={5}
                        fontFamilyVariant={'title'}
                        colorVariant={getColorVariant(styleVariant)}
                    >
                        {finalAppName}
                    </Typography>
                </InvisibleLink>
                {leftComponents}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {!showsMobileMenu && rightComponents}
                {matches && navInfos.length > 0 ? (
                    menuLength === 'long' ? (
                        <MenuIcon
                            style={iconStyle as React.CSSProperties}
                            colorVariant={getIconColorVariant(styleVariant)}
                            onClick={() => setIsMenuVisible(!isMenuVisible)}
                        />
                    ) : (
                        <MenuButton
                            colorVariant={getIconColorVariant(styleVariant)}
                            styleApi={{
                                iconStyle: iconStyle as React.CSSProperties,
                                styledOptionList: {
                                    marginLeft: '0',
                                    width: styledOptionWidth,
                                },
                            }}
                            navLinks={navInfos as { label: string; route: string }[]}
                        />
                    )
                ) : (
                    <div>
                        <a href={linkedInUrl} style={{ marginLeft: spacing.ss4 }}>
                            <LinkedInIcon colorVariant={getIconColorVariant(styleVariant)} sizeVariant={3} />
                        </a>
                        <a href={githubUrl} style={{ marginLeft: spacing.ss4 }}>
                            <GithubIcon colorVariant={getIconColorVariant(styleVariant)} sizeVariant={3} />
                        </a>
                    </div>
                )}
            </div>

            <Fade
                in={isMenuVisible && navInfos !== undefined}
                style={{ position: 'fixed', top: '0px', left: '0px', zIndex: 99 }}
                mountOnEnter={true}
                unmountOnExit={true}
                mounted={{ transform: 'translateY(0px)' }}
                unmounted={{ transform: 'translateY(-300px)' }}
                styleKeys={['transform']}
            >
                <MobileMenu
                    navInfos={navInfos!}
                    onClose={() => setIsMenuVisible(false)}
                    footer={showsMobileMenu ? rightComponents : undefined}
                />
            </Fade>
        </AppBar>
    );
};

const getColorVariant = (styleVariant: StyleVariant): ColorVariant => {
    switch (styleVariant) {
        case 1:
            return 'background';
        case 2:
        case 3:
            return 'primaryDark';
    }
};

const getIconColorVariant = (styleVariant: StyleVariant): ColorVariant => {
    switch (styleVariant) {
        case 1:
            return 'secondaryLight';
        case 2:
        case 3:
            return 'secondaryDark';
    }
};
