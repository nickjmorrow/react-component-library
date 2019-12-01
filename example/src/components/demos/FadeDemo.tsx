import * as React from 'react';
import { Fade, Toggle, Typography } from '@nickjmorrow/react-component-library';
import { Block } from '../shared';
import styled from 'styled-components';
// import { TransitionGroup } from "react-transition-group";

export const FadeDemo: React.FC = () => {
    const [blockNumbers, setBlockNumbers] = React.useState(new Array(5).fill(0).map((n, i) => i));

    const [isFaded, setIsFaded] = React.useState(false);

    return (
        <Wrapper>
            <Typography styleVariant={'h1'}>Fade Animation</Typography>
            <Toggle isToggled={isFaded} onClick={() => setIsFaded(!isFaded)} />
            {blockNumbers.map(bn => (
                <Fade key={bn} in={isFaded} enterTimeout={bn * 50}>
                    <Block
                        onClick={() =>
                            setBlockNumbers(currentBlockNumbers => currentBlockNumbers.filter(cbn => cbn !== bn))
                        }
                    />
                </Fade>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 24px;
`;
