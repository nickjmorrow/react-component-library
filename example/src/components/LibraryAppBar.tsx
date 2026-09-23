import * as React from 'react';
import styled from 'styled-components';
import { ColorModePicker, ColorModePreference, PopulatedAppBar } from '@nickjmorrow/react-component-library';
import { navInfos } from '../componentRoutes';

export const LibraryAppBar: React.FC<{
    colorModePreference: ColorModePreference;
    onColorModeChange(preference: ColorModePreference): void;
}> = ({ colorModePreference, onColorModeChange }) => {
    return (
        <StyledAppBar
            navInfos={navInfos}
            styleVariant={2}
            appName={'Component Library'}
            rightComponents={<ColorModePicker value={colorModePreference} onChange={onColorModeChange} />}
        />
    );
};

const StyledAppBar = styled(PopulatedAppBar)`
    padding: ${p => p.theme.njmTheme.spacing.ss8} 0px;
`;
