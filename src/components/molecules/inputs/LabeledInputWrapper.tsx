import styled from 'styled-components';
import { ThemeContext } from '../../../styleConstants';
import * as React from 'react';
import { StyleConstant } from '../../../typeUtilities';

export const LabeledInputWrapper: React.SFC<{
    onClick: () => void;
    renderInput: () => React.ReactNode;
    renderLabel: () => React.ReactNode;
}> = ({ renderInput, renderLabel, onClick: handleClick }) => {
    const { spacing } = React.useContext(ThemeContext);
    return (
        <StyledLabeledInputWrapper spacing={spacing} onClick={handleClick}>
            {renderInput()}
            <InputWrapper>{renderLabel()}</InputWrapper>
        </StyledLabeledInputWrapper>
    );
};

const StyledLabeledInputWrapper = styled('div')<{
    spacing: StyleConstant<'spacing'>;
}>`
    cursor: pointer;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: ${p => p.spacing.ss4};
    justify-content: flex-start;
    margin: auto 0;
`;

export const InputWrapper = styled.div``;
