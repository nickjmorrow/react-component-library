import * as React from 'react';
import { Typography, StyleConstant, ThemeContext } from "@nickjmorrow/react-component-library";
import { DisplayPaper } from '../../../components/DisplayPaper';
import styled from 'styled-components';

export const SpacingDemo: React.FC = () => {
	const {
		spacing,
		colors,
		border: { borderRadius },
	} = React.useContext(ThemeContext);

	const renderBar = (width: string) => (
		<Bar spacing={spacing} colors={colors} borderRadius={borderRadius} width={width} />
	);

	return (
		<React.Fragment>
			<Typography styleVariant={1}>Spacing</Typography>
			<DisplayPaper
				style={{
					display: 'flex',
					flexDirection: 'row',
					maxWidth: 'none',
					justifyContent: 'none',
				}}
			>
				<div style={{ display: 'flex' }}>
					<div
						style={{
							display: 'grid',
							gridAutoFlow: 'row',
							gridRowGap: spacing.ss4,
							width: 'min-content',
							height: '100%',
							marginRight: spacing.ss4,
						}}
					>
						{Object.keys(spacing).map(key => (
							<Typography>{key}</Typography>
						))}
					</div>
					<div
						style={{
							display: 'grid',
							gridAutoFlow: 'row',
							gridRowGap: spacing.ss4,
							maxWidth: '800px',
							height: '100%',
						}}
					>
						{Object.keys(spacing).map(key => renderBar(spacing[key]))}
					</div>
				</div>
			</DisplayPaper>
		</React.Fragment>
	);
};

const Bar = styled('div')<{
	spacing: StyleConstant<'spacing'>;
	width: string;
	colors: StyleConstant<'colors'>;
	borderRadius: StyleConstant<'border'>['borderRadius'];
}>`
	height: 27px;
	width: ${p => p.width};
	background-color: ${p => p.colors.core.cs3};
	border-radius: ${p => p.borderRadius.br1};
`;
