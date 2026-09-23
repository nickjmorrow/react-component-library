import styled from 'styled-components';
import { ThemeContext } from '~/theming';
import * as React from 'react';
import { StyleConstant } from '../../../typeUtilities';
import { shouldForwardProp } from '~/styled';

export const LabeledInputWrapper: React.FC<{
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

const StyledLabeledInputWrapper = styled('div').withConfig({ shouldForwardProp })<{
    spacing: StyleConstant<'spacing'>;
}>`
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: auto 0;
`;

export const InputWrapper = styled.div.withConfig({ shouldForwardProp })`
    margin-left: ${p => p.theme.njmTheme.spacing.ss4};
`;
