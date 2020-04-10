import * as React from 'react';
import styled from 'styled-components';
import { PopulatedAppBar } from '@nickjmorrow/react-component-library';
import { withRouter, RouteComponentProps } from 'react-router';
import { navInfos } from '../componentRoutes';

export const AppBarInternal: React.FC<RouteComponentProps> = () => {
    return <StyledAppBar navInfos={navInfos} styleVariant={2} appName={'Component Library'} />;
};

const StyledAppBar = styled(PopulatedAppBar)`
    padding: ${p => p.theme.njmTheme.spacing.ss8} 0px;
`;

export const LibraryAppBar = withRouter(AppBarInternal);
