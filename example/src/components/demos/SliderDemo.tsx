import 'rc-slider/assets/index.css';
import * as React from 'react';
// TODO: this should be inline or not need to be created in subscribing packages
import { Slider, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import { DisplayPaper } from '../DisplayPaper';

export const SliderDemo: React.SFC = () => {
    const [value, setValue] = React.useState(50);
    const { spacing } = useThemeContext();
    return (
        <>
            <Typography styleVariant={'h1'}>Slider</Typography>
            <Typography style={{ display: 'block', maxWidth: spacing.ss160 }}>
                The slider component is used to allow the selection of a value amid a continuous range of values.
            </Typography>
            <DisplayPaper>
                <Slider value={value} onChange={setValue} min={2} max={100} />
            </DisplayPaper>
        </>
    );
};
