import * as React from 'react';
import { DisplayPaper } from '../../DisplayPaper';
import {
    Typography,
    GetComponentProps,
    Link,
    BulletPointTypography,
    useThemeContext,
} from '@nickjmorrow/react-component-library';
import styled from 'styled-components';
import { DescriptionContainer } from '../../../components/shared';

type TypographyProp = GetComponentProps<typeof Typography>;

export const TypographyDemo: React.FC = () => {
    const sizeVariants: TypographyProp['sizeVariant'][] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const colorVariants: TypographyProp['colorVariant'][] = [
        'core',
        'accent',
        'success',
        'warning',
        'danger',
        'neutral',
    ];

    const darkColorVariants: TypographyProp['colorVariant'][] = ['primaryDark', 'secondaryDark'];

    const lightColorVariants: TypographyProp['colorVariant'][] = ['primaryLight', 'secondaryLight'];
    const {
        colors,
        spacing,
        typography: { fontWeights },
    } = useThemeContext();

    return (
        <>
            <div>
                <Typography styleVariant={'h1'}>Typography</Typography>
            </div>
            <DescriptionContainer>
                <Typography>
                    The Typography component is used in all components that render text onto the page, ensuring
                    consistency. Inputs like sizing, colors, and font weights can be configured up front and then reused
                    throughout an application through variant props.
                </Typography>
            </DescriptionContainer>
            <Typography styleVariant={'h2'}>Size Variants</Typography>
            <Typography>
                Use consistent sizing throughout your application to make it easier for users to recognize a hierarchy.
            </Typography>
            <DisplayPaper
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <table style={{ borderSpacing: '0 16px' }}>
                    <tbody>
                        {sizeVariants.map((bs, i) => (
                            <tr key={i}>
                                <td>
                                    <Typography>{`Size Variant ${bs}`}</Typography>
                                </td>
                                <td>
                                    <Typography sizeVariant={bs}>{`Lorem Ipsum`}</Typography>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </DisplayPaper>
            <Typography styleVariant={'h2'}>Color Variants</Typography>
            <DescriptionContainer>
                <Typography>
                    Color variants have associated meaning and are not named after actual colors. Assign a color variant
                    to atomic components like your typography or buttons to maintain consistency while centralizing the
                    detail of what color each variant actually maps to.
                </Typography>
            </DescriptionContainer>
            <DisplayPaper
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    height: '200px',
                }}
            >
                {colorVariants.map(renderColorVariant)}
            </DisplayPaper>
            <Typography styleVariant={'h2'}>Dark Color Variants</Typography>
            <DescriptionContainer>
                <Typography>
                    These are typically used for dark text on a light background. The secondary dark variant can be
                    useful for less important text to help illustrate a hierarchy.
                </Typography>
            </DescriptionContainer>
            <DisplayPaper
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    height: '100px',
                }}
            >
                {darkColorVariants.map(renderColorVariant)}
            </DisplayPaper>
            <Typography styleVariant={'h2'}>Light Color Variants</Typography>
            <DescriptionContainer>
                <Typography>
                    Like the dark color variants, these are typically used for light text or iconography against a
                    darker background.
                </Typography>
            </DescriptionContainer>
            <DisplayPaper
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    height: '100px',
                    backgroundColor: colors.neutral.cs6,
                    padding: '16px',
                }}
            >
                {lightColorVariants.map(renderColorVariant)}
            </DisplayPaper>
            <div>
                <Typography styleVariant={'h2'}>Weight Variants</Typography>
            </div>
            <DescriptionContainer>
                <Typography>
                    The rendered font weight depends on the weights of the font that have been imported. Please see{' '}
                    <Link
                        isInline={true}
                        route={'https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Fallback_weights'}
                    >
                        fallback weights
                    </Link>{' '}
                    for more information.
                </Typography>
            </DescriptionContainer>
            <DisplayPaper style={{ display: 'grid', gridAutoFlow: 'row', gridRowGap: spacing.ss1 }}>
                {Object.keys(fontWeights).map(key => {
                    const weightVariant = parseInt(key.replace(/^\D+/g, ''), 10) as GetComponentProps<
                        typeof Typography
                    >['weightVariant'];
                    return (
                        <div
                            key={weightVariant}
                            style={{
                                display: 'grid',
                                gridColumnGap: spacing.ss8,
                                gridAutoFlow: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                            }}
                        >
                            <Typography>{weightVariant}</Typography>
                            <Typography sizeVariant={5} weightVariant={weightVariant}>
                                Testing
                            </Typography>
                        </div>
                    );
                })}
            </DisplayPaper>
            <Typography styleVariant={'h2'}>Custom Typography</Typography>
            <DescriptionContainer>
                <Typography>
                    Easily apply different, custom styles to typography as needed. Embrace the need for departures.
                </Typography>
            </DescriptionContainer>
            <DisplayPaper>
                <CustomTypography>Hello, world!</CustomTypography>
            </DisplayPaper>
            <Typography style={{ display: 'block' }} styleVariant={'h2'}>
                Bullet Point Typography
            </Typography>
            <DescriptionContainer>
                <Typography>
                    Construct new components with typography as you discover common use cases, like using bullet points.
                </Typography>
            </DescriptionContainer>
            <DisplayPaper>
                <BulletPointTypography>Hello, world!</BulletPointTypography>
            </DisplayPaper>
            <Typography style={{ display: 'block' }} styleVariant={'h2'}>
                Links
            </Typography>
            <DescriptionContainer>
                <Typography>
                    Style your links with consistency so users immediately recognize their functionality.
                </Typography>
            </DescriptionContainer>
            <DisplayPaper>
                <Typography>
                    Hello, I am a <Typography link={''}>link to someplace.</Typography>
                </Typography>
            </DisplayPaper>
        </>
    );
};

const renderColorVariant = (colorVariant: string & TypographyProp['colorVariant'], index: number) => {
    const cvs = colorVariant as string;
    return (
        <Typography colorVariant={colorVariant} sizeVariant={4} weightVariant={4} key={index}>
            {cvs[0].toLocaleUpperCase() + cvs.slice(1, cvs.length)} Color
        </Typography>
    );
};

const CustomTypography = styled(Typography)`
    color: red;
    transition: all 100ms;
    &: hover {
        color: orange;
        transition: all 100ms;
    }
`;
