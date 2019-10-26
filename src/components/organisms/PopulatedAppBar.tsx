import * as React from 'react';
import { AppBar, Typography, GithubIcon, StyleVariant, ColorVariant, Link, MenuIcon, MenuButton } from '../atoms';
import { GITHUB_LINK } from '~/constants';
import { ThemeContext, mediaWidth } from '~/styleConstants';
import { getFinalShowBoxShadow } from '~/styleConstants/themeUtilities';
import Media from 'react-media';
import { MobileMenu } from './MobileMenu';
import { GetComponentProps } from '~/typeUtilities';
import { SideNav } from './SideNav';
import { Fade } from '../animations';

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

export const PopulatedAppBar: React.SFC<{
    appName: React.ReactNode;
    styleVariant?: StyleVariant;
    rightComponents?: React.ReactNode;
    leftComponents?: React.ReactNode;
    showBoxShadow?: boolean;
    menuLength?: 'long' | 'short';
    navInfos?: GetComponentProps<typeof SideNav>['navInfos'];
    styledOptionWidth?: string;
    githubLink?: string;
}> = ({
    appName,
    styleVariant = 1,
    leftComponents,
    rightComponents,
    showBoxShadow,
    navInfos = [],
    menuLength = 'long',
    styledOptionWidth,
    githubLink = GITHUB_LINK,
}) => {
    const { spacing, defaultShowBoxShadow } = React.useContext(ThemeContext);
    const [isMenuVisible, setIsMenuVisible] = React.useState(false);
    const finalShowBoxShadow = getFinalShowBoxShadow(showBoxShadow, defaultShowBoxShadow);

    // TODO: clean up
    const useLongMenu = menuLength === 'long';
    const iconStyle = {
        position: 'absolute',
        right: '0px',
        cursor: 'pointer',
        top: '14px',
    };
    return (
        <Media query={`(max-width: ${mediaWidth.mobileLandscape})`}>
            {(matches: boolean) => (
                <AppBar
                    style={{ justifyContent: matches ? 'center' : 'space-between' }}
                    styleVariant={styleVariant}
                    showBoxShadow={finalShowBoxShadow}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link route={'/'}>
                            <Typography
                                sizeVariant={7}
                                weightVariant={5}
                                fontFamilyVariant={'title'}
                                colorVariant={getColorVariant(styleVariant)}
                            >
                                {appName}
                            </Typography>
                        </Link>
                        {leftComponents}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {rightComponents}
                        {matches && navInfos.length > 0 ? (
                            useLongMenu ? (
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
                            <a href={githubLink} style={{ marginLeft: spacing.ss4 }}>
                                <GithubIcon colorVariant={getIconColorVariant(styleVariant)} sizeVariant={3} />
                            </a>
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
                        <MobileMenu navInfos={navInfos!} onClose={() => setIsMenuVisible(false)} />
                    </Fade>
                </AppBar>
            )}
        </Media>
    );
};
