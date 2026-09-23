import {
    ArgumentType,
    ThemeContext,
    ThemeInputsContext,
    getThemeFromNewInputs,
    getMergedThemeInputs,
    updateThemeInputs,
    PopulatedFooter,
    shouldForwardProp,
    Theme,
    useColorModePreference,
} from '@nickjmorrow/react-component-library';
import * as React from 'react';
import { BrowserRouter } from 'react-router';
import styled, { createGlobalStyle, StyleSheetManager, ThemeProvider } from 'styled-components';
import './App.css';
import { LibraryAppBar } from './components/LibraryAppBar';
import { Main } from './Main';
import { getAppUrl } from 'src/services/getAppUrl';

const initialThemeInputs: ArgumentType<typeof updateThemeInputs>[0] = {
    colors: {
        core: {
            hue: 180,
            middleLightness: 50,
            saturation: 60,
        },
        accent: {
            hue: 267,
        },
        success: {
            hue: 148,
            saturation: 55,
        },
        warning: {
            hue: 49,
            hueDecrement: 6,
            lightnessDecrement: 4,
            saturation: 72,
        },
        danger: {
            hue: 344,
        },
    },
    typography: {
        fontFamily: { default: 'Lato, sans-serif' },
    },
    defaultShowBoxShadow: false,
    appSettings: {
        githubUrl: 'https://github.com/nickjmorrow/react-component-library',
        appName: 'Component Library',
        appUrl: getAppUrl(),
    },
};

const App: React.FC = () => {
    const [themeInputs, setThemeInputs] = React.useState(initialThemeInputs);

    const handleUpdateThemeInputs = (newThemeInputs: ArgumentType<typeof updateThemeInputs>[0]): void =>
        setThemeInputs(updateThemeInputs(newThemeInputs));

    const { preference, mode, setPreference } = useColorModePreference('react-component-library-color-mode');
    const theme = getThemeFromNewInputs({ ...themeInputs, mode });

    // Also set by the inline script in index.html before first paint; keep them in the same place.
    // color-scheme switches native scrollbars and form controls to match.
    React.useLayoutEffect(() => {
        document.documentElement.style.colorScheme = mode;
    }, [mode]);

    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <StyleSheetManager shouldForwardProp={shouldForwardProp}>
                <ThemeProvider theme={{ njmTheme: theme }}>
                    <ThemeContext.Provider value={theme}>
                        <ThemeInputsContext.Provider
                            value={{
                                themeInputs: getMergedThemeInputs(themeInputs),
                                updateThemeInputs: handleUpdateThemeInputs,
                            }}
                        >
                            <GlobalStyle $theme={theme} />
                            <Wrapper>
                                <LibraryAppBar colorModePreference={preference} onColorModeChange={setPreference} />
                                <Main />
                                <PopulatedFooter style={{ marginTop: '40px' }} />
                            </Wrapper>
                        </ThemeInputsContext.Provider>
                    </ThemeContext.Provider>
                </ThemeProvider>
            </StyleSheetManager>
        </BrowserRouter>
    );
};

export default App;

const GlobalStyle = createGlobalStyle<{ $theme: Theme }>`
    body {
        background-color: ${p => p.$theme.colors.background};
        color: ${p => p.$theme.colors.neutral.cs8};
    }
`;

const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`;
