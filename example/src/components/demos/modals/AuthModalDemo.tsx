import {
  AuthModal,
  Button,
  GoogleLoginButton
} from "njm-react-component-library";
import * as React from "react";
import { useState } from "react";

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
      <AuthModal
        isOpen={isOpen}
        onLoginClick={defaultFunc}
        onRegisterClick={defaultFunc}
        onRequestClose={handleClose}
        isLoading={isLoading}
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
