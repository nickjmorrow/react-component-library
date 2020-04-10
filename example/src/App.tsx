import {
    ArgumentType,
    ThemeContext,
    ThemeInputsContext,
    getThemeFromNewInputs,
    getMergedThemeInputs,
    updateThemeInputs,
    PopulatedFooter,
} from '@nickjmorrow/react-component-library';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
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

const App: React.SFC = () => {
    const [themeInputs, setThemeInputs] = React.useState(initialThemeInputs);

    const handleUpdateThemeInputs = (newThemeInputs: ArgumentType<typeof updateThemeInputs>[0]): void =>
        setThemeInputs(updateThemeInputs(newThemeInputs));

    const theme = getThemeFromNewInputs(themeInputs);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ThemeProvider theme={{ njmTheme: theme }}>
                <ThemeContext.Provider value={theme}>
                    <ThemeInputsContext.Provider
                        value={{
                            themeInputs: getMergedThemeInputs(themeInputs),
                            updateThemeInputs: handleUpdateThemeInputs,
                        }}
                    >
                        <Wrapper>
                            <LibraryAppBar />
                            <Main />
                            <PopulatedFooter style={{ marginTop: '40px' }} />
                        </Wrapper>
                    </ThemeInputsContext.Provider>
                </ThemeContext.Provider>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;

const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`;
