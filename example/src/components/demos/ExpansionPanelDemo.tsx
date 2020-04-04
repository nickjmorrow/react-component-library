import * as React from 'react';
import { ExpansionPanel, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import { DescriptionContainer } from '../../components/shared';
import { DisplayPaper } from '../../components/DisplayPaper';

export const ExpansionPanelDemo: React.FC = () => {
    const theme = useThemeContext();
    return (
        <>
            <Typography styleVariant={'h1'}>{'Expansion Panel'}</Typography>
            <DescriptionContainer>
                <Typography>Hide content by default and show it when a user clicks on visible content.</Typography>
            </DescriptionContainer>
            <DisplayPaper style={{ backgroundColor: 'lightgray', borderRadius: theme.border.borderRadius.br1 }}>
                <ExpansionPanel visibleContent={'I am visible!'} hiddenContent={'I was not visible!'} />
            </DisplayPaper>
        </>
    );
};
