import * as React from 'react';
import { Button, Typography } from '@nickjmorrow/react-component-library';
import styled from 'styled-components';

export const Home: React.FC = () => {
    return (
        <div>
            <Typography styleVariant={'h1'}>Hello!</Typography>
            <Typography>
                I made a few components for use in personal projects. Then it became a personal project. Anyone's
                welcome to peruse and use.
            </Typography>
            <StyledButton link={'/getting-started'}>Getting Started</StyledButton>
        </div>
    );
};

const StyledButton = styled(Button)`
    margin-left: 0;
    background-image: linear-gradient(60deg, hsl(270deg, 80%, 50%), hsl(170deg, 80%, 50%));
    border: none;
    color: white;
    font-weight: 700;
    transition: filter 300ms;
    &:hover {
        filter: brightness(110%);
        transition: filter 100ms linear;
    }
`;
