import * as React from 'react';
import { Collapse } from '~/components/animations/Collapse';
import styled from 'styled-components';
import { ThemeContext } from '~/theming';
import { StyleConstant } from '~/typeUtilities';
import { ChevronUpIcon, getFormattedTextNode, Paper } from '../atoms';
import { shouldForwardProp } from '~/styled';

export const ExpansionPanel: React.FC<{
    visibleContent: React.ReactNode;
    hiddenContent: React.ReactNode;
    isFullWidth?: boolean;
    rightComponent?: (isOpened: boolean) => React.ReactNode;
    styleApi?: {
        wrapperStyle?: React.CSSProperties;
        visibleStyle?: React.CSSProperties;
        hiddenStyle?: React.CSSProperties;
    };
}> = ({ visibleContent, hiddenContent, isFullWidth = false, rightComponent, styleApi = {} }) => {
    const [isOpened, setIsOpened] = React.useState(false);
    const toggleIsOpened = () => setIsOpened(prev => !prev);
    const { transitions, spacing } = React.useContext(ThemeContext);

    const defaultRightComponent = (isOpenedArg: boolean) => (
        <IconWrapper isOpened={isOpenedArg} transitions={transitions}>
            <ChevronUpIcon />
        </IconWrapper>
    );
    const finalRightComponent = rightComponent || defaultRightComponent;
    return (
        <Paper
            style={{
                width: isFullWidth ? '100%' : 'max-content',
                ...styleApi.wrapperStyle,
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <VisibleWrapper
                    spacing={spacing}
                    onClick={toggleIsOpened}
                    isFullWidth={isFullWidth}
                    style={styleApi.visibleStyle}
                >
                    {getFormattedTextNode(visibleContent)}
                    {finalRightComponent(isOpened)}
                </VisibleWrapper>
            </div>
            <Collapse isOpened={isOpened}>
                <BaseWrapper spacing={spacing} style={styleApi.hiddenStyle}>
                    {getFormattedTextNode(hiddenContent)}
                </BaseWrapper>
            </Collapse>
        </Paper>
    );
};

const BaseWrapper = styled('div').withConfig({ shouldForwardProp })<{
    spacing: StyleConstant<'spacing'>;
    isFullWidth?: boolean;
}>`
    min-width: ${p => p.spacing.ss48};
    height: auto;
    overflow: visible;
    padding: ${p => p.spacing.ss4};
`;

const IconWrapper = styled('div').withConfig({ shouldForwardProp })<{
    isOpened: boolean;
    transitions: StyleConstant<'transitions'>;
}>`
    transform: translateY(${p => (p.isOpened ? -10 : 0)}%) rotate(${p => (p.isOpened ? 180 : 0)}deg);
`;

const VisibleWrapper = styled(BaseWrapper)<{
    spacing: StyleConstant<'spacing'>;
}>`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${p => p.spacing.ss16};
    box-sizing: border-box;
    width: 100%;
`;
