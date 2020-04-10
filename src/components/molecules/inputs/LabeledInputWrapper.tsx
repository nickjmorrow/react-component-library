import styled from 'styled-components';
import { ThemeContext } from '~/theming';
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: auto 0;
`;

export const InputWrapper = styled.div`
    margin-left: ${p => p.theme.njmTheme.spacing.ss4};
`;
