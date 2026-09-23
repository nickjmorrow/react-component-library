import * as React from 'react';
import styled from 'styled-components';
import { PopulatedAppBar } from '@nickjmorrow/react-component-library';
import { navInfos } from '../componentRoutes';

export const LibraryAppBar: React.FC = () => {
    return <StyledAppBar navInfos={navInfos} styleVariant={2} appName={'Component Library'} />;
};

const StyledAppBar = styled(PopulatedAppBar)`
    padding: ${p => p.theme.njmTheme.spacing.ss8} 0px;
`;
