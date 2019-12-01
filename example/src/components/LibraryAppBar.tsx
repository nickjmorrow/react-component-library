import * as React from 'react';
import styled from 'styled-components';
import { PopulatedAppBar, Theme, useThemeContext } from '@nickjmorrow/react-component-library';
import { withRouter, RouteComponentProps } from 'react-router';
import { navInfos } from '../componentRoutes';

export const AppBarInternal: React.FC<RouteComponentProps> = () => {
    const theme = useThemeContext();
    return <StyledAppBar theme={theme} navInfos={navInfos} styleVariant={2} appName={'Component Library'} />;
};

const StyledAppBar = styled(PopulatedAppBar)<{ theme: Theme }>`
    padding: 36px 0px;
`;

export const LibraryAppBar = withRouter(AppBarInternal);
