import * as React from "react";
import { Typography, useThemeContext } from 'react-component-library';
import { DisplayPaper } from './DisplayPaper';

export const GettingStarted: React.FC = () => {
	const { spacing } = useThemeContext();
  return <div>
	  <Typography styleVariant={1} >Getting Started</Typography>
	  <Typography styleVariant={2} style={{display: 'block'}}>Installation</Typography>
	  <CodeBlock>
		  <Code>npm install @nickjmorrow/react-component-library </Code>
	  </CodeBlock>
	  <Typography styleVariant={2} style={{display: 'block'}}>Running Tests</Typography>
	  <Typography style={{maxWidth: spacing.ss160, marginBottom: spacing.ss4}}>Jest tests are used for asserting UI logic, like the resulting state of a set of checkboxes when one of them is clicked. You can run Jest tests with the following:</Typography>
	  <CodeBlock>
		  <Code>npm run test</Code>
	  </CodeBlock>
	  <Typography style={{maxWidth: spacing.ss160, marginBottom: spacing.ss4}}>Cypress tests are used for integration or end-to-end testing. They could be used to ensure that text appears in the TextInput component when expected.</Typography>
	  <CodeBlock>
		  <Code>npm run --prefix example cypress:open</Code>
	  </CodeBlock>
	  <Typography styleVariant={2} style={{display: 'block'}}>Purpose</Typography>
	  <Typography style={{display: 'block'}}>Lorem ipsum dolor</Typography>
  </div>;
};

const CodeBlock : React.FC = ({children}) => {
	const { colors, spacing } = useThemeContext();
	return (
		<DisplayPaper style={{backgroundColor: colors.neutral.cs7, width: spacing.ss160, justifyContent: 'flex-start', overflowX: 'auto'}}>
			{children}
		</DisplayPaper>
	)
};

const Code : React.FC = ({children}) => {
	return (
		<Typography colorVariant={'primaryLight'} fontFamilyVariant={'monospace'}>
			{children}
		</Typography>
	)
}