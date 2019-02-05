import * as React from 'react';
import styled from 'styled-components';
import { Modal, IModalProps } from './Core/components/containers/Modal';
import { Button, ButtonVariant } from './Core/components/atoms/Button';
import { Paper } from './Core/components/containers/Paper';
import {
	Typography,
	formattedTextNode
} from './Core/components/atoms/Typography';
import { PaperModal } from './Core/components/containers/PaperModal';
import { colors, horizontalSpacing } from './Core/styleConstants';

export const TwoButtonModal: React.SFC<IModalProps & IOwnProps> = ({
	isOpen,
	children,
	title,
	onRequestClose: handleRequestClose,
	primaryButtonElement,
	secondaryButtonElement,
	secondaryButtonVariant,
	onPrimaryClick: handlePrimaryClick,
	onSecondaryClick: handleSecondaryClick
}) => {
	const modalTitle =
		title && typeof title === 'string' ? (
			<Typography variant="h2" noMargin={true}>
				{title}
			</Typography>
		) : (
			title
		);
	const handlePrimaryClickInternal = () => {
		handlePrimaryClick();
		handleRequestClose();
	};

	const handleSecondaryClickInternal = () => {
		handleSecondaryClick();
		handleRequestClose();
	};
	return (
		<PaperModal isOpen={isOpen} onRequestClose={handleRequestClose}>
			<Wrapper>
				<TitleWrapper>{modalTitle}</TitleWrapper>
				<ChildrenContainer>
					{formattedTextNode(children, { color: 'secondary' })}
				</ChildrenContainer>
				<ButtonsContainer>
					<Button
						onClick={handleSecondaryClickInternal}
						variant={'transparent'}
						showBoxShadow={false}
						color={'primary'}>
						{secondaryButtonElement}
					</Button>
					<ButtonWrapper>
						<Button
							onClick={handlePrimaryClickInternal}
							useMargin={false}>
							{primaryButtonElement}
						</Button>
					</ButtonWrapper>
				</ButtonsContainer>
			</Wrapper>
		</PaperModal>
	);
};

// css
const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	padding: 0.75rem ${horizontalSpacing.default};
	background-color: ${colors.lighterGray};
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;

const ChildrenContainer = styled.div`
	margin: 2rem ${horizontalSpacing.default};
`;

const ButtonWrapper = styled.div`
	margin: 4px 0px 4px 4px;
`;

const TitleWrapper = styled.div`
	margin-left: ${horizontalSpacing.default};
`;

// types
interface IOwnProps {
	primaryButtonElement: React.ReactNode;
	secondaryButtonElement: React.ReactNode;
	secondaryButtonVariant?: ButtonVariant;
	title?: React.ReactNode;
	onPrimaryClick(): void;
	onSecondaryClick(): void;
}
