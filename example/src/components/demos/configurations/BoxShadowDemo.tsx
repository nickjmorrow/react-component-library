import * as React from 'react';
import { Typography, ThemeContext } from '@nickjmorrow/react-component-library';
import { DisplayPaper } from '../../../components/DisplayPaper';
import { Block, DescriptionContainer } from '../../../components/shared';

export const BoxShadowDemo: React.FC = () => {
    const { colors, boxShadow } = React.useContext(ThemeContext);
    const boxColor = colors.accent.cs5;
    const boxShadows = Object.keys(boxShadow).map(bs => ({ key: `theme.boxShadow.${bs}`, value: boxShadow[bs] }));
    return (
        <>
            <Typography styleVariant={'h1'}>{'Box Shadow'}</Typography>
            <DescriptionContainer>
                <Typography>Give elements a three-dimensional "pop" off the page.</Typography>
            </DescriptionContainer>
            <DisplayPaper>
                <table style={{ borderSpacing: '18px' }}>
                    <tbody>
                        {boxShadows.map((bs, i) => (
                            <tr key={i}>
                                <td style={{ paddingRight: '24px' }}>
                                    <Typography fontFamilyVariant={'monospace'}>{bs.key}</Typography>
                                </td>
                                <td>
                                    <Block color={boxColor} boxShadow={bs.value} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </DisplayPaper>
        </>
    );
};
