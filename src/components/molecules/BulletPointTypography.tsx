import * as React from 'react';
import { GetComponentProps } from '~/typeUtilities';
import { ArrowIcon, Typography } from '~/components';

export const BulletPointTypography: React.FC<GetComponentProps<typeof Typography>> = ({ children }) => {
    return (
        <>
            <ArrowIcon sizeVariant={1} />
            <Typography>{children}</Typography>
        </>
    );
};
