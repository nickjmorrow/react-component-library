import * as React from 'react';
import { Typography } from '~/components/atoms/typography';
import { IOption } from '~/types';
import { StyledOption } from './StyledOption';

export const Option: React.SFC<{
    option: IOption;
    isSelected?: boolean;
    styleApi?: {
        option?: React.CSSProperties;
        typography?: React.CSSProperties;
    };
    onClick(Option: IOption): void;
}> = ({ option, onClick: handleClick, isSelected, styleApi = {} }) => {
    const handleClickInternal = () => {
        handleClick(option);
    };

    return (
        <StyledOption onClick={handleClickInternal} isSelected={isSelected} style={styleApi.option}>
            <Typography style={styleApi.typography}>{option.label}</Typography>
        </StyledOption>
    );
};
