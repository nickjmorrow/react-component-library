import * as React from 'react';
import { GetComponentProps } from '~/index';
import { facebookColors } from '~/styleConstants/brandColors';
import { Button } from '..';
import { noOp } from '../buttonServices';

export const FacebookButton: React.FC<GetComponentProps<typeof Button>> = ({ ...props }) => {
    //   const facebookColorSet: GetComponentProps<typeof Button>["colorSet"] = {
    //     color: "white",
    //     colorHover: "white",
    //     colorActive: "white",
    //     backgroundColor: facebookColors.color,
    //     backgroundColorHover: facebookColors.colorHover,
    //     backgroundColorActive: facebookColors.colorActive,
    //     borderColor: facebookColors.color,
    //     borderColorActive: facebookColors.colorActive,
    //     borderColorHover: facebookColors.colorHover
    //   };
    return (
        <Button onClick={noOp} {...props}>
            {props.children}
        </Button>
    );
};
