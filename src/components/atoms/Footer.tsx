import * as React from 'react';
import styled from 'styled-components';
import { Typography } from './Typography';
import { colors } from '../../styleConstants';
import { fullName } from '../../constants';

const currentYear = new Date().getFullYear();
const defaultText = `© ${currentYear} ${fullName}`;

export const Footer: React.SFC<IOwnProps> = ({ text = defaultText }) => (
	<StyledFooter>
		<Typography color="light" style={{ padding: '6px', fontSize: '14px' }}>
			{text}
		</Typography>
	</StyledFooter>
);

const StyledFooter = styled.div`
	margin-top: 24px;
	background-color: ${colors.primary};
	display: flex;
	align-items: center;
	padding: 2px;
`;

interface IOwnProps {
	text?: string;
}
