import * as React from "react";
import ReactGoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { GoogleButton } from "../atoms";

export const GoogleLoginButton: React.SFC<IOwnProps> = ({
  handleSuccess,
  handleFailure = () => {
    return;
  },
  clientId
}) => (
  <ReactGoogleLogin
    clientId={clientId}
    buttonText={"Sign In With Google"}
    onSuccess={handleSuccess}
    render={renderButton}
    onFailure={handleFailure}
  />
);

const renderButton:
  | ((props?: { onClick: () => void } | undefined) => JSX.Element)
  | undefined = renderProps => <GoogleButton onClick={renderProps!.onClick} />;

// types
interface IOwnProps {
  clientId: string;
  handleSuccess: (res: GoogleLoginResponse) => void;
  handleFailure?: (error: any) => void;
}
