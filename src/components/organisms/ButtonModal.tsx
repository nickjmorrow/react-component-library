import * as React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '~/theming';
import { GetComponentProps, StyleConstant } from '../../typeUtilities';
import { Button, getFormattedTextNode, PaperModal, Typography } from '../atoms';

type ModalProps = GetComponentProps<typeof PaperModal>;

interface ButtonInfo {
    onClick: () => void;
    element: React.ReactNode;
}

export const ButtonModal: React.SFC<
    ModalProps & {
        secondaryButtonVariant?: GetComponentProps<typeof Button>['colorVariant'];
        title?: React.ReactNode;
        primaryButtonInfo: ButtonInfo;
        secondaryButtonInfo?: ButtonInfo;
        styles?: React.CSSProperties;
    }
> = ({
    isOpen,
    children,
    title,
    onRequestClose: handleRequestClose,
    primaryButtonInfo,
    secondaryButtonInfo,
    styles,
}) => {
    const { onClick: handlePrimaryClick, element: primaryButtonElement } = primaryButtonInfo;

    const modalTitle =
        title && typeof title === 'string' ? (
            <Typography sizeVariant={5} weightVariant={5}>
                {title}
            </Typography>
        ) : (
            title
        );

    const handlePrimaryClickInternal = () => {
        handlePrimaryClick();
        handleRequestClose();
    };

    const {
        colors,
        spacing,
        border: { borderRadius },
    } = React.useContext(ThemeContext);

    return (
        <PaperModal
            isOpen={isOpen}
            styles={styles}
            onRequestClose={handleRequestClose}
            wrapperStyles={{ backgroundColor: colors.background, borderRadius: borderRadius.br1 }}
        >
            <Wrapper>
                <AboveButtons spacing={spacing}>
                    <TitleWrapper spacing={spacing}>{modalTitle}</TitleWrapper>
                    <ChildrenContainer spacing={spacing}>
                        {getFormattedTextNode(children, {
                            colorVariant: 'secondaryDark',
                            sizeVariant: 4,
                        })}
                    </ChildrenContainer>
                </AboveButtons>
                <ButtonsContainer spacing={spacing} colors={colors} borderRadius={borderRadius}>
                    {secondaryButtonInfo && (
                        <Button
                            onClick={() => {
                                secondaryButtonInfo.onClick();
                                handleRequestClose();
                            }}
                            styleVariant={3}
                            textColorVariant={'core'}
                            useMargin={false}
                        >
                            {secondaryButtonInfo.element}
                        </Button>
                    )}
                    <Button onClick={handlePrimaryClickInternal} useMargin={false}>
                        {primaryButtonElement}
                    </Button>
                </ButtonsContainer>
            </Wrapper>
        </PaperModal>
    );
};

// css
const ButtonsContainer = styled('div')<{
    spacing: StyleConstant<'spacing'>;
    colors: StyleConstant<'colors'>;
    borderRadius: StyleConstant<'border'>['borderRadius'];
}>`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: ${({ spacing }) => `${spacing.ss4} ${spacing.ss8}`};
    background-color: ${({ colors }) => colors.neutral.cs2};
    padding-right: ${p => p.spacing.ss8};
    border-radius: ${({ borderRadius: { br1 } }) => `0 0 ${br1} ${br1}`};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const AboveButtons = styled('div')<{ spacing: StyleConstant<'spacing'> }>`
    margin: ${({ spacing: { ss8: margin } }) => `${margin} ${margin} 0 ${margin}`};
`;

const ChildrenContainer = styled('div')<{ spacing: StyleConstant<'spacing'> }>`
    margin: 2rem ${p => p.spacing.ss2};
`;

const TitleWrapper = styled('div')<{ spacing: StyleConstant<'spacing'> }>`
    margin-left: ${p => p.spacing.ss2};
`;
