import * as React from 'react';
import { mediaWidth, SideNavRouterContainer, useMediaQuery } from '@nickjmorrow/react-component-library';
import { Routes } from 'react-router';
import styled from 'styled-components';
import { navInfos, routes } from './componentRoutes';

export const Main: React.FC = () => {
    const isWideEnoughForSideNav = useMediaQuery(`(min-width: ${mediaWidth.mobileLandscape})`);
    return (
        <Wrapper>
            {isWideEnoughForSideNav && (
                <SideNavRouterContainer
                    navInfos={navInfos}
                    styleApi={{ navStyle: { height: 'calc(100vh - 64px - 64px)' } }}
                />
            )}
            <RoutesWrapper>
                <Routes>{routes}</Routes>
            </RoutesWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    flex-grow: 1;
`;

const RoutesWrapper = styled.div`
    margin: 36px;
    width: 100%;
`;
