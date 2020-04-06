import * as React from 'react';
import { Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import { Block } from '../../../components/shared/Block';
import { DescriptionContainer } from '../../../components/shared/DescriptionContainer';
import { DisplayPaper } from '../../../components/DisplayPaper';

export const Borders: React.FC = () => {
    const {
        border: { borderRadius },
    } = useThemeContext();

    const borderDescriptors = [
        {
            title: 'Border Radius',
            styleObject: borderRadius,
            description: 'Give a softer look with rounded corners.',
            themePrefix: 'theme.border.borderRadius',
            styleKey: 'borderRadius',
        },
    ];
    return (
        <>
            <Typography styleVariant={'h1'}>Borders</Typography>
            {borderDescriptors.map(o => (
                <React.Fragment key={o.title}>
                    <Typography styleVariant={'h2'}>{o.title}</Typography>
                    <DescriptionContainer>
                        <Typography>{o.description}</Typography>
                    </DescriptionContainer>
                    <DisplayPaper>
                        <table style={{ borderSpacing: '18px' }}>
                            <tbody>
                                {Object.keys(o.styleObject).map((bs, i) => (
                                    <tr key={i}>
                                        <td style={{ paddingRight: '24px' }}>
                                            <Typography
                                                fontFamilyVariant={'monospace'}
                                            >{`${o.themePrefix}.${bs}`}</Typography>
                                        </td>
                                        <td style={{ paddingRight: '24px' }}>
                                            <Typography fontFamilyVariant={'monospace'}>{o.styleObject[bs]}</Typography>
                                        </td>
                                        <td>
                                            <Block
                                                style={{
                                                    [o.styleKey]: o.styleObject[bs],
                                                }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </DisplayPaper>
                </React.Fragment>
            ))}
        </>
    );
};
