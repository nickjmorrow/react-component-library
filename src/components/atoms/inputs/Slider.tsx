import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '../typography/Typography';
import { ThemeContext } from '../../../styleConstants';
import { StyleConstant } from '../../../typeUtilities';

interface IProps {
    value?: number;
    min: number;
    max: number;
    spacingVariant?: keyof StyleConstant<'spacing'>;
    onChange(value: number): void;
}

export const Slider: React.SFC<IProps> = ({ value, min, max, spacingVariant = 'ss64', onChange: handleChange }) => {
    const {
        spacing,
        colors,
        border: { borderStyle },
    } = React.useContext(ThemeContext);

    const handleStyle = {
        border: borderStyle.bs2,
        borderColor: colors.core.cs7,
        backgroundColor: colors.neutral.cs1,
        boxShadow: 'none',
    };

    return (
        <Wrapper spacing={spacing} spacingVariant={spacingVariant}>
            <RcSlider
                min={min}
                max={max}
                value={value || min}
                onChange={handleChange}
                handleStyle={handleStyle}
                railStyle={{
                    backgroundColor: colors.neutral.cs3,
                    width: spacing.ss48,
                }}
                trackStyle={{ backgroundColor: colors.core.cs5 }}
            />
            <ValueWrapper>
                <Typography sizeVariant={3}>{value}</Typography>
            </ValueWrapper>
        </Wrapper>
    );
};

const Wrapper = styled('div')<{
    spacing: StyleConstant<'spacing'>;
    spacingVariant: keyof StyleConstant<'spacing'>;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 230px;
    padding: ${p => p.spacing.ss1} 0;
`;

const ValueWrapper = styled.div`
    margin-left: 12px;
`;
