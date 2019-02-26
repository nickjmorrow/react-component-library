import {
  AuthModal,
  Button,
  GoogleLoginButton
} from "njm-react-component-library";
import * as React from "react";

export const AuthModalDemo: React.SFC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleAuthModal = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);
  const defaultFunc = () => {
    return;
  };

  return (
    <>
      <AuthModal
        isOpen={isOpen}
        onLoginClick={defaultFunc}
        onRegisterClick={defaultFunc}
        onRequestClose={handleClose}
        renderAdditionalComponents={[
          () => (
            <GoogleLoginButton
              handleSuccess={() => {
                return;
              }}
              clientId={"myClientId"}
            />
          )
        ]}
      />
      <Button onClick={toggleAuthModal}>Toggle Auth Modal</Button>
    </>
  );
};
