import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { Link } from './Core/components/atoms/Link';
import { colors } from './Core/styleConstants';
import { itemLevel } from './types';
import { Typography } from './Core/components/atoms/Typography';

export interface NavItemProps {
	level: itemLevel;
	text: string;
	route: string;
}

export const NavItem: React.SFC<NavItemProps> = props => {
	const { level } = props;
	return (
		<Wrapper>
			<Link route={props.route}>
				<Content level={level}>
					<Typography>{props.text}</Typography>
				</Content>
			</Link>
		</Wrapper>
	);
};

// interface ContentProps {
// 	level: itemLevel;
// }

// todo: ContentProps & React.HTMLProps<HTMLDivElement
const content: StyledFunction<any> = styled.div;

const Content = content`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
    margin-left: ${p => getMargin(p.level)};
`;

const getHeading = (level: itemLevel) => {
	switch (level) {
		case itemLevel.heading:
			return 'h3';
		case itemLevel.one:
			return 'h4';
		default:
			throw new Error(`invalid level: ${level}`);
	}
};

const getMargin = (level: itemLevel) => {
	switch (level) {
		case itemLevel.heading:
			return '1em';
		case itemLevel.one:
			return '2em';
		case itemLevel.two:
			return '3em';
		case itemLevel.three:
			return '4em';

		default:
			throw new Error(`invalid level: ${level}`);
	}
};

const Wrapper = styled.div`
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	&: hover {
		background-color: ${colors.lightGray};
		transition: 0.2s;
	}
`;
