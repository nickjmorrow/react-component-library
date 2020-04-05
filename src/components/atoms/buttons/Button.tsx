import * as React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import styled from 'styled-components';
import { Link } from '~/components/atoms';
import { useThemeContext } from '~/theming';
import { StyleConstant } from '~/typeUtilities';
import { Fade } from '../../animations';
import { getColorFunc } from '../atomServices';
import { ColorSet, ColorVariant, StyleVariant, UIState, WeightVariant } from '../types';
import { getFormattedTextNode } from '../typography';
import { getBackgroundColor, getBorderColor, getColor } from './buttonServices';
import { Theme } from '~/types';

export const Button: React.SFC<{
    textColorVariant?: ColorVariant;
    colorVariant?: ColorVariant;
    styleVariant?: StyleVariant;
    weightVariant?: WeightVariant;
    isLoading?: boolean;
    link?: string;
    isDisabled?: boolean;
    useMargin?: boolean;
    style?: React.CSSProperties;
    typographyStyle?: React.CSSProperties;
    className?: string;
    onClick?(): void;
}> = ({
    children,
    colorVariant = 'core',
    textColorVariant = 'primaryLight',
    styleVariant = 1,
    weightVariant = 7,
    useMargin = true,
    isDisabled = false,
    isLoading = false,
    link,
    style,
    typographyStyle,
    className,
    onClick: handleClick = () => {
        return;
    },
}) => {
    const handleClickInternal = () => {
        if (!isDisabled) {
            handleClick();
        }
    };
    const theme = useThemeContext();
    const { defaultShowBoxShadow, colors } = theme;

    const formattedChildren = getFormattedTextNode(children, {
        colorVariant: 'inherit',
        sizeVariant: 2,
        weightVariant: weightVariant,
        isInteractive: false,
        style: {
            textTransform: 'uppercase',
            ...typographyStyle,
        },
    });

    const innerWrapperRef = React.useRef<HTMLDivElement>(null);
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    if (innerWrapperRef && innerWrapperRef.current) {
        if (innerWrapperRef.current.clientWidth > width) {
            setWidth(innerWrapperRef.current.clientWidth);
        }

        if (innerWrapperRef.current.clientHeight > height) {
            setHeight(innerWrapperRef.current.clientHeight);
        }
    }

    const loadingFade = (
        <>
            <Fade in={isLoading as boolean} style={{ position: 'absolute' }} transitionVariant={'medium'}>
                <PulseLoader color={getColorFunc('normal')(colors, textColorVariant)} size={8} sizeUnit={'px'} />
            </Fade>
            <Fade in={!isLoading} transitionVariant={'medium'}>
                {formattedChildren}
            </Fade>
        </>
    );

    const content = (
        <StyledButton
            className={className}
            style={style}
            theme={theme}
            defaultShouldShowBoxShadow={defaultShowBoxShadow}
            isDisabled={isDisabled}
            colorVariant={colorVariant}
            styleVariant={styleVariant}
            width={width}
            height={height}
            useMargin={useMargin}
            onClick={handleClickInternal}
        >
            <InnerWrapper width={width} height={height} ref={innerWrapperRef}>
                {isLoading !== undefined ? loadingFade : formattedChildren}
            </InnerWrapper>
        </StyledButton>
    );

    return link ? (
        <Link route={link} style={{ textDecoration: 'none', width: 'min-content' }}>
            {content}
        </Link>
    ) : (
        content
    );
};

const InnerWrapper = styled('div')<{ width: number; height: number }>`
    min-width: ${p => p.width}px;
    min-height: ${p => p.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledButton = styled('button')<
    {
        colorVariant: ColorVariant;
        styleVariant: StyleVariant;
        useMargin?: boolean;
        style?: React.CSSProperties;
        theme: Theme;
        width: number;
        height: number;
        isDisabled: boolean;
        defaultShouldShowBoxShadow: boolean;
    } & Partial<ColorSet & React.HTMLProps<HTMLButtonElement>>
>`
    border: ${p => p.theme.border.borderStyle.bs2};
    color: ${p => getColor(p.theme.colors, p.colorVariant, p.styleVariant, 'normal', p.isDisabled)};
    background-color: ${p =>
        getBackgroundColor(p.theme.colors, p.colorVariant, p.styleVariant, 'normal', p.isDisabled)};
    border-color: ${p => getBorderColor(p.theme.colors, p.colorVariant, p.styleVariant, 'normal', p.isDisabled)};
    border-radius: ${p => p.theme.border.borderRadius.br1};
    padding: ${p => `${p.theme.spacing.ss2} ${p.theme.spacing.ss3}`};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${p => (p.useMargin ? p.theme.spacing.ss4 : 0)};
    cursor: ${p => (p.isDisabled ? 'not-allowed' : 'pointer')};
    outline: none;
    word-wrap: wrap;
    box-shadow: ${p => getBoxShadow(p.theme.boxShadow, p.isDisabled, p.theme.defaultShouldShowBoxShadow, 'normal')};
    min-width: ${p => p.width}px;
    min-height: ${p => p.height} / px;
    width: max-content;
    height: max-content;
    font-weight: ${p => p.theme.typography.fontWeights.fw9};
    transition-property: box-shadow, background-color, border-color;
    transition: ${p => p.theme.transitions.medium};
    &:hover {
        border-color: ${p => getBorderColor(p.theme.colors, p.colorVariant, p.styleVariant, 'hover', p.isDisabled)};
        background-color: ${p =>
            getBackgroundColor(p.theme.colors, p.colorVariant, p.styleVariant, 'hover', p.isDisabled)};
        color: ${p => getColor(p.theme.colors, p.colorVariant, p.styleVariant, 'hover', p.isDisabled)};
        box-shadow: ${p =>
            p.defaultShouldShowBoxShadow &&
            getBoxShadow(p.theme.boxShadow, p.isDisabled, p.theme.defaultShouldShowBoxShadow, 'hover')};
        transition: ${p => !p.isDisabled && `all ${p.theme.transitions.medium} ease-in-out`}};
    }
    &:active {
        border-color: ${p => getBorderColor(p.theme.colors, p.colorVariant, p.styleVariant, 'active', p.isDisabled)};
        background-color: ${p =>
            getBackgroundColor(p.theme.colors, p.colorVariant, p.styleVariant, 'active', p.isDisabled)};
        color: ${p => getColor(p.theme.colors, p.colorVariant, p.styleVariant, 'active', p.isDisabled)};
        box-shadow: ${p =>
            p.defaultShouldShowBoxShadow &&
            getBoxShadow(p.theme.boxShadow, p.isDisabled, p.theme.defaultShouldShowBoxShadow, 'active')};
        transition: ${p => !p.isDisabled && `all ${p.theme.transitions.medium} ease-in-out`}};
    }
`;

const getBoxShadow = (
    boxShadow: StyleConstant<'boxShadow'>,
    isDisabled: boolean,
    showBoxShadow: boolean,
    uiState: UIState,
) => {
    if (!showBoxShadow) {
        return 'none';
    }

    if (isDisabled) {
        return boxShadow.bs2;
    }

    switch (uiState) {
        case 'normal':
            return boxShadow.bs3;
        case 'hover':
            return boxShadow.bs2;
        case 'active':
            return boxShadow.bs1;
    }
};
