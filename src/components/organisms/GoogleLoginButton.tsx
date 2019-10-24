import * as React from "react";
import ReactGoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { GoogleButton, Button } from "../atoms";
import { GetComponentProps } from "~/typeUtilities";

export const GoogleLoginButton: React.SFC<
{
	clientId: string;
	className: string;
	buttonProps: GetComponentProps<typeof Button>
	handleSuccess: (res: GoogleLoginResponse) => void;
	handleFailure?: (error: any) => void;
  } & GetComponentProps<typeof ReactGoogleLogin>
> = ({
  handleSuccess,
  className,
  handleFailure = () => {
    return;
  },
  clientId,
  buttonProps,
  ...props
}) => {
  const renderButton:
    | ((props?: { onClick: () => void } | undefined) => JSX.Element)
    | undefined = renderProps => (
    <GoogleButton className={className} onClick={renderProps!.onClick} {...buttonProps}>
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
