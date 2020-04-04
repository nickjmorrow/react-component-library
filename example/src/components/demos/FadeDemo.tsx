import * as React from 'react';
import { Fade, Toggle, Typography } from '@nickjmorrow/react-component-library';
import { Block, DescriptionContainer } from '../shared';
import styled from 'styled-components';
import { DisplayPaper } from '../../components/DisplayPaper';
// import { TransitionGroup } from "react-transition-group";

export const FadeDemo: React.FC = () => {
    const [blockNumbers, setBlockNumbers] = React.useState(new Array(5).fill(0).map((n, i) => i));

    const [isFaded, setIsFaded] = React.useState(false);

    return (
        <Wrapper>
            <Typography styleVariant={'h1'}>Fade Animation</Typography>
            <DescriptionContainer>
                <Typography>Animate the fading in of content by wrapping it in a single component.</Typography>
            </DescriptionContainer>
            <Typography>
                isFaded: <Typography fontFamilyVariant={'monospace'}>{isFaded ? 'true' : 'false'}</Typography>
            </Typography>
            <Toggle isToggled={isFaded} onClick={() => setIsFaded(!isFaded)} />
            <DisplayPaper style={{ padding: '0', marginLeft: '-16px', marginTop: '-12px' }}>
                <table style={{ borderSpacing: '18px' }}>
                    <tbody>
                        {blockNumbers.map((bn, i) => {
                            const enterTimeout = bn * 50;
                            return (
                                <tr key={i}>
                                    <td style={{ paddingRight: '24px' }}>
                                        <Typography fontFamilyVariant={'monospace'}>{`${enterTimeout}ms`}</Typography>
                                    </td>
                                    <td>
                                        <Fade key={bn} in={isFaded} enterTimeout={enterTimeout}>
                                            <Block
                                                onClick={() =>
                                                    setBlockNumbers(currentBlockNumbers =>
                                                        currentBlockNumbers.filter(cbn => cbn !== bn),
                                                    )
                                                }
                                            />
                                        </Fade>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </DisplayPaper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 24px;
`;
