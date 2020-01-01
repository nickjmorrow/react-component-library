import { AuthModal, Button, GoogleLoginButton, Typography } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export const AuthModalDemo: React.SFC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toggleAuthModal = () => setIsOpen(!isOpen);
    const handleClose = () => setIsOpen(false);
    const defaultFunc = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsOpen(false);
        }, 1000);
    };

    return (
        <>
            <Typography styleVariant={'h1'}>Auth Modal</Typography>
            <Button onClick={toggleAuthModal} useMargin={false}>
                Toggle Auth Modal
            </Button>
            <AuthModal
                isOpen={isOpen}
                onLoginClick={defaultFunc}
                onRegisterClick={defaultFunc}
                onRequestClose={handleClose}
                isLoading={isLoading}
                renderAdditionalComponents={[
                    () => (
                        <StyledGoogleLoginButton
                            handleSuccess={() => {
                                return;
                            }}
                            clientId={'myClientId'}
                        />
                    ),
                ]}
            />
        </>
    );
};

const StyledGoogleLoginButton = styled(GoogleLoginButton)`
    width: 100%;
`;
