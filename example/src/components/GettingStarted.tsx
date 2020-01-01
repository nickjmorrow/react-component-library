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
                For development, you'll want to build both the component library and a demo app in watch mode. To do so,
                run the below:
            </Typography>
            <CodeBlock>
                <Code>npm run build:watch</Code>
            </CodeBlock>
            <Typography>In another shell, run the following to begin watching the demo app:</Typography>
            <CodeBlock>
                <Code>cd example && npm run build:watch</Code>
            </CodeBlock>
            <Typography styleVariant={'h2'} style={{ display: 'block' }}>
                Running Tests
            </Typography>
            <Typography>
                Jest tests are used for asserting UI logic, like the resulting state of a set of checkboxes when one of
                them is clicked. You can run Jest tests with the following:
            </Typography>
            <CodeBlock>
                <Code>npm run test</Code>
            </CodeBlock>
            <Typography>
                Cypress tests are used for integration or end-to-end testing. They could be used to ensure that text
                appears in the TextInput component when expected.
            </Typography>
            <CodeBlock>
                <Code>npm run --prefix example cypress:open</Code>
            </CodeBlock>
        </ContentWrapper>
    );
};

const CodeBlock: React.FC = ({ children }) => {
    const { colors } = useThemeContext();
    return (
        <DisplayPaper
            style={{
                backgroundColor: colors.neutral.cs7,
                justifyContent: 'flex-start',
                overflowX: 'auto',
                width: '100%',
            }}
        >
            {children}
        </DisplayPaper>
    );
};

const Code: React.FC = ({ children }) => {
    return (
        <Typography colorVariant={'primaryLight'} fontFamilyVariant={'monospace'}>
            {children}
        </Typography>
    );
};
