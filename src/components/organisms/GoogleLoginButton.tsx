import * as React from 'react';
import { GoogleOAuthProvider, TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { GoogleButton, Button } from '../atoms';
import { GetComponentProps } from '~/typeUtilities';

type GoogleLoginButtonProps = {
    clientId: string;
    className?: string;
    buttonProps?: GetComponentProps<typeof Button>;
    handleSuccess: (res: TokenResponse) => void;
    handleFailure?: (error: unknown) => void;
};

// Uses Google Identity Services; the legacy gapi sign-in behind react-google-login no longer works.
export const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ clientId, ...props }) => (
    <GoogleOAuthProvider clientId={clientId}>
        <GoogleLoginButtonInternal {...props} />
    </GoogleOAuthProvider>
);

const GoogleLoginButtonInternal: React.FC<Omit<GoogleLoginButtonProps, 'clientId'>> = ({
    handleSuccess,
    className,
    handleFailure = () => {
        return;
    },
    buttonProps,
}) => {
    const login = useGoogleLogin({
        onSuccess: handleSuccess,
        onError: handleFailure,
        onNonOAuthError: handleFailure,
    });
    return (
        <GoogleButton className={className} {...buttonProps} onClick={() => login()}>
            Sign In With Google
        </GoogleButton>
    );
};
