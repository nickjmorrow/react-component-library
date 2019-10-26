import * as React from 'react';
import styled from 'styled-components';
import { GetComponentProps } from '~/typeUtilities';
import { googleColors } from '~/styleConstants';
import { Button, Typography, GoogleIcon } from '../..';
import { noOp } from '../buttonServices';

// TODO: be able to pass in Icon component to button that passes in props to Icon component
// so that I dont have to manually set the Typography props
export const GoogleButton: React.FC<GetComponentProps<typeof Button>> = ({ ...props }) => {
    //   const googleColorSet: GetComponentProps<typeof Button>["colorSet"] = {
    //     color: "white",
    //     colorHover: "white",
    //     colorActive: "white",
    //     backgroundColor: googleColors.color,
    //     backgroundColorHover: googleColors.colorHover,
    //     backgroundColorActive: googleColors.colorActive,
    //     borderColor: googleColors.color,
    //     borderColorActive: googleColors.colorActive,
    //     borderColorHover: googleColors.colorHover
    //   };
    return (
        <Button onClick={noOp} {...props}>
            <FlexWrapper>
                <GoogleIcon colorVariant={'inherit'} sizeVariant={2} />
                <Typography
                    style={{ textTransform: 'uppercase', marginLeft: '4px' }}
                    colorVariant={'inherit'}
                    sizeVariant={2}
                    weightVariant={5}
                >
                    {props.children}
                </Typography>
            </FlexWrapper>
        </Button>
    );
};

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
