import * as React from 'react';
import { Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import { DisplayPaper } from './DisplayPaper';
import { ContentWrapper } from './shared/ContentWrapper';

export const GettingStarted: React.FC = () => {
    return (
        <ContentWrapper>
            <Typography styleVariant={'h1'}>Getting Started</Typography>
            <Typography styleVariant={'h2'} style={{ display: 'block' }}>
                Installation
            </Typography>
            <CodeBlock>
                <Code>npm install @nickjmorrow/react-component-library </Code>
            </CodeBlock>
            <Typography styleVariant={'h2'} style={{ display: 'block' }}>
                Development
            </Typography>
            <Typography>
                Install dependencies once, then start the demo app. It uses the library straight from source, so edits
                to components hot-reload without a separate library build.
            </Typography>
            <CodeBlock>
                <Code>npm install && npm run dev</Code>
            </CodeBlock>
            <Typography styleVariant={'h2'} style={{ display: 'block' }}>
                Running Tests
            </Typography>
            <Typography>
                Vitest tests are used for asserting UI logic, like whether a select's menu opens and closes when
                clicked. You can run them with the following:
            </Typography>
            <CodeBlock>
                <Code>npm test</Code>
            </CodeBlock>
        </ContentWrapper>
    );
};

const CodeBlock: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { colors } = useThemeContext();
    return (
        <DisplayPaper
            style={{
                backgroundColor: colors.neutral.cs7,
                justifyContent: 'flex-start',
                overflowX: 'auto',
                width: '100%',
                padding: '16px',
            }}
        >
            {children}
        </DisplayPaper>
    );
};

const Code: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Typography colorVariant={'primaryLight'} fontFamilyVariant={'monospace'}>
            {children}
        </Typography>
    );
};
