import * as React from 'react';
import { ButtonModal } from '../organisms';

export const LogOutModal: React.SFC<IOwnProps> = ({
    isOpen,
    onRequestClose: handleRequestClose,
    onPrimaryClick: handlePrimaryClick,
}) => {
    return (
        <ButtonModal
            isOpen={isOpen}
            onRequestClose={handleRequestClose}
            primaryButtonInfo={{ element: 'Log Out', onClick: handlePrimaryClick }}
            secondaryButtonInfo={{ element: 'Cancel', onClick: handleRequestClose }}
            title={'Log Out'}
        >
            Are you sure you want to log out?
        </ButtonModal>
    );
};

interface IOwnProps {
    isOpen: boolean;
    onRequestClose(): void;
    onPrimaryClick(): void;
}
