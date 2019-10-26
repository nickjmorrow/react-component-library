import * as React from 'react';
import { GetComponentProps } from '~/index';
import { linkedInColors } from '~/styleConstants/brandColors';
import { Button } from '..';
import { noOp } from '../buttonServices';

export const LinkedInButton: React.FC<GetComponentProps<typeof Button>> = ({ ...props }) => {
    //   const linkedInColorSet: GetComponentProps<typeof Button>["colorSet"] = {
    //     color: "white",
    //     colorHover: "white",
    //     colorActive: "white",
    //     backgroundColor: linkedInColors.color,
    //     backgroundColorHover: linkedInColors.colorHover,
    //     backgroundColorActive: linkedInColors.colorActive,
    //     borderColor: linkedInColors.color,
    //     borderColorActive: linkedInColors.colorActive,
    //     borderColorHover: linkedInColors.colorHover
    //   };
    return (
        <Button onClick={noOp} {...props}>
            {props.children}
        </Button>
    );
};
