import * as React from "react";
import ReactGoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { GoogleButton } from "../atoms";
import { GetComponentProps } from "~/typeUtilities";

export const GoogleLoginButton: React.SFC<
  IOwnProps & GetComponentProps<typeof ReactGoogleLogin>
> = ({
  handleSuccess,
  handleFailure = () => {
    return;
  },
  clientId,
  ...props
}) => {
  const renderButton:
    | ((props?: { onClick: () => void } | undefined) => JSX.Element)
    | undefined = renderProps => (
    <GoogleButton isFullWidth={true} onClick={renderProps!.onClick}>
      Sign In With Google
    </GoogleButton>
  );
  return (
    <ReactGoogleLogin
      clientId={clientId}
      onSuccess={handleSuccess}
      render={renderButton}
      onFailure={handleFailure}
      {...props}
    />
  );
};

// types
interface IOwnProps {
  clientId: string;
  handleSuccess: (res: GoogleLoginResponse) => void;
  handleFailure?: (error: any) => void;
}
