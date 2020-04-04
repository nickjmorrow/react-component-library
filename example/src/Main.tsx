import * as React from 'react';
import { mediaWidth, SideNavRouterContainer } from '@nickjmorrow/react-component-library';
import styled from 'styled-components';
import { navInfos, routes } from './componentRoutes';
import Media from 'react-media';

export const Main: React.SFC<{}> = () => {
    return (
        <Wrapper>
            <Media query={`(min-width: ${mediaWidth.mobileLandscape})`}>
                {(matches: boolean) =>
                    matches && (
                        <SideNavRouterContainer
                            navInfos={navInfos}
                            styleApi={{ navStyle: { height: 'calc(100vh - 64px - 64px)' } }}
                        />
                    )
                }
            </Media>
            <RoutesWrapper>{routes}</RoutesWrapper>
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
