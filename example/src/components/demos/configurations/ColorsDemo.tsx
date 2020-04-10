import * as React from 'react';
import {
    ArgumentType,
    ExpansionPanel,
    getMergedThemeInputs,
    Slider,
    StyleConstant,
    ThemeInputsContext,
    Typography,
    Link,
    Theme,
    useThemeContext,
} from '@nickjmorrow/react-component-library';
import styled from 'styled-components';
import { Block } from '../../shared/Block';
import { DescriptionContainer } from '../../shared';

export const ColorsDemo: React.SFC = () => {
    const { colors, spacing } = useThemeContext();

    const { themeInputs, updateThemeInputs } = React.useContext(ThemeInputsContext);

    const handleChange = (
        value: number,
        colorInput: keyof ReturnType<typeof getMergedThemeInputs>['colors']['core'],
        colorShade: keyof typeof colors,
    ) => {
        const newThemeInput: ArgumentType<typeof updateThemeInputs>[0] = {
            colors: {
                [colorShade]: {
                    [colorInput]: value,
                },
            },
        };
        updateThemeInputs(newThemeInput);
    };

    const renderBlocks = (colorShade: Theme['colors']['core'], colorName: string, description: string) => (
        <React.Fragment key={colorName}>
            <Typography styleVariant={'h2'}>{colorName}</Typography>
            <DescriptionContainer>
                <Typography>{description}</Typography>
            </DescriptionContainer>
            <Blocks spacing={spacing}>
                <ColorsWrapper spacing={spacing}>
                    {Object.keys(colorShade).map(shade => (
                        <Block key={shade} color={colorShade[shade]} />
                    ))}
                </ColorsWrapper>
                <ExpansionPanelWrapper>
                    <ExpansionPanel
                        visibleContent={'Change Inputs'}
                        hiddenContent={
                            <Parameters>
                                <ColorInput spacing={spacing}>
                                    <Typography>Hue: </Typography>
                                    <Slider
                                        min={0}
                                        max={360}
                                        value={themeInputs.colors![colorName.toLowerCase() as keyof typeof colors]!.hue}
                                        onChange={value =>
                                            handleChange(value, 'hue', colorName.toLowerCase() as keyof typeof colors)
                                        }
                                    />
                                </ColorInput>
                                <ColorInput spacing={spacing}>
                                    <Typography>Hue Decrement: </Typography>
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={
                                            themeInputs.colors![colorName.toLowerCase() as keyof typeof colors]!
                                                .hueDecrement
                                        }
                                        onChange={value =>
                                            handleChange(
                                                value,
                                                'hueDecrement',
                                                colorName.toLowerCase() as keyof typeof colors,
                                            )
                                        }
                                    />
                                </ColorInput>
                                <ColorInput spacing={spacing}>
                                    <Typography>Middle Lightness: </Typography>
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={
                                            themeInputs.colors![colorName.toLowerCase() as keyof typeof colors]!
                                                .middleLightness
                                        }
                                        onChange={value =>
                                            handleChange(
                                                value,
                                                'middleLightness',
                                                colorName.toLowerCase() as keyof typeof colors,
                                            )
                                        }
                                    />
                                </ColorInput>
                                <ColorInput spacing={spacing}>
                                    <Typography>Lightness Increment: </Typography>
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={
                                            themeInputs.colors![colorName.toLowerCase() as keyof typeof colors]!
                                                .lightnessIncrement
                                        }
                                        onChange={value =>
                                            handleChange(
                                                value,
                                                'lightnessIncrement',
                                                colorName.toLowerCase() as keyof typeof colors,
                                            )
                                        }
                                    />
                                </ColorInput>
                                <ColorInput spacing={spacing}>
                                    <Typography>Lightness Decrement: </Typography>
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={
                                            themeInputs.colors![colorName.toLowerCase() as keyof typeof colors]!
                                                .lightnessDecrement
                                        }
                                        onChange={value =>
                                            handleChange(
                                                value,
                                                'lightnessDecrement',
                                                colorName.toLowerCase() as keyof typeof colors,
                                            )
                                        }
                                    />
                                </ColorInput>
                                <ColorInput spacing={spacing}>
                                    <Typography>Saturation: </Typography>
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={
                                            themeInputs.colors![colorName.toLowerCase() as keyof typeof colors]!
                                                .saturation
                                        }
                                        onChange={value =>
                                            handleChange(
                                                value,
                                                'saturation',
                                                colorName.toLowerCase() as keyof typeof colors,
                                            )
                                        }
                                    />
                                </ColorInput>
                                <ColorInput spacing={spacing}>
                                    <Typography>Saturation Increment: </Typography>
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={
                                            themeInputs.colors![colorName.toLowerCase() as keyof typeof colors]!
                                                .saturationIncrement
                                        }
                                        onChange={value =>
                                            handleChange(
                                                value,
                                                'saturationIncrement',
                                                colorName.toLowerCase() as keyof typeof colors,
                                            )
                                        }
                                    />
                                </ColorInput>
                            </Parameters>
                        }
                    />
                </ExpansionPanelWrapper>
            </Blocks>
        </React.Fragment>
    );
    const { core, accent, neutral, danger, warning, success } = colors;
    const colorInfos = [
        {
            palette: core,
            name: 'Core',
            description: 'Used throughout the style system, commonly in buttons and links.',
        },
        {
            palette: accent,
            name: 'Accent',
            description: 'Used less often, only when an additional color would benefit a component.',
        },
        { palette: neutral, name: 'Neutral', description: 'Used for shadows, backgrounds, and text colors.' },
        {
            palette: danger,
            name: 'Danger',
            description: 'For destructive actions that a user should think about before commiting to.',
        },
        {
            palette: warning,
            name: 'Warning',
            description: 'For non-destructive actions that a user should still consider.',
        },
        {
            palette: success,
            name: 'Success',
            description: 'Associated with positive actions and success or completion.',
        },
    ];

    return (
        <>
            <Typography styleVariant={'h1'}>Colors</Typography>
            <DescriptionContainer>
                <Typography>
                    Inputs to a color like saturation, lightness, and hue are all configurable. While system colors
                    cannot be individually overriden, components like{' '}
                    <Link route={'/buttons'} isInline={true}>
                        Button
                    </Link>{' '}
                    or{' '}
                    <Link route={'/typography'} isInline={true}>
                        Typography
                    </Link>{' '}
                    support color overrides. This structure promotes consistency across the application while allowing
                    for one-off departures.
                </Typography>
            </DescriptionContainer>
            <BlocksWrapper>{colorInfos.map(ci => renderBlocks(ci.palette, ci.name, ci.description))}</BlocksWrapper>
        </>
    );
};

const BlocksWrapper = styled.div``;
const ColorsWrapper = styled('div')<{ spacing: StyleConstant<'spacing'> }>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Parameters = styled.div`
    display: flex;
    flex-direction: column;
`;

const ColorInput = styled('div')<{ spacing: StyleConstant<'spacing'> }>`
    margin-bottom: ${p => p.spacing.ss3};
`;

const Blocks = styled('div')<{
    spacing: StyleConstant<'spacing'>;
}>`
    margin-bottom: ${p => p.spacing.ss12};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
`;

const ExpansionPanelWrapper = styled.div`
    border: 2px solid ${p => p.theme.njmTheme.colors.neutral.cs3};
    border-radius: ${p => p.theme.njmTheme.border.borderRadius.br1};
`;
