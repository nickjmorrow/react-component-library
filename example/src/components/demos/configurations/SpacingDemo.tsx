import * as React from 'react';
import { Typography, StyleConstant, ThemeContext } from '@nickjmorrow/react-component-library';
import { DisplayPaper } from '../../../components/DisplayPaper';
import styled from 'styled-components';
import { ContentWrapper } from '../../shared/ContentWrapper';

export const SpacingDemo: React.FC = () => {
    const {
        spacing,
        colors,
        border: { borderRadius },
    } = React.useContext(ThemeContext);

    const renderBar = (width: string) => (
        <Bar spacing={spacing} colors={colors} borderRadius={borderRadius} width={width} />
    );

    return (
        <React.Fragment>
            <Typography styleVariant={'h1'}>Spacing</Typography>
            <ContentWrapper>
                <Typography>
                    Using consistent spacing makes it easier to make decisions and have things look "relative"
                    throughout the application. The appended number to each key helps to show how much larger one value
                    is to another.
                </Typography>
            </ContentWrapper>
            <DisplayPaper
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    maxWidth: 'none',
                    justifyContent: 'none',
                }}
            >
                <table style={{ borderSpacing: spacing.ss2 }}>
                    <tbody>
                        {Object.keys(spacing).map(key => (
                            <tr key={key}>
                                <td style={{ paddingRight: '16px' }}>
                                    <Typography fontFamilyVariant={'monospace'}>{`theme.spacing.${key}`}</Typography>
                                </td>
                                <td>{renderBar(spacing[key])}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </DisplayPaper>
        </React.Fragment>
    );
};

const Bar = styled('div')<{
    spacing: StyleConstant<'spacing'>;
    width: string;
    colors: StyleConstant<'colors'>;
    borderRadius: StyleConstant<'border'>['borderRadius'];
}>`
    height: 27px;
    width: ${p => p.width};
    background-color: ${p => p.colors.core.cs3};
    border-radius: ${p => p.borderRadius.br1};
`;
