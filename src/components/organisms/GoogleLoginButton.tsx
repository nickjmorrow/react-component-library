import * as React from "react";
import ReactGoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { Button, Typography } from "~/components/atoms";
import { GoogleIcon } from "~/components/atoms/icons";

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
  | undefined = renderProps => (
  <Button
    style={{ width: "100%" }}
    backgroundColor={"google"}
    onClick={renderProps!.onClick}>
    <GoogleIcon style={{ marginRight: "8px" }} />
    <Typography variant="button" color="light">
      Sign In With Google
    </Typography>
  </Button>
);

// types
interface IOwnProps {
  clientId: string;
  handleSuccess: (res: GoogleLoginResponse) => void;
  handleFailure?: (error: any) => void;
}
