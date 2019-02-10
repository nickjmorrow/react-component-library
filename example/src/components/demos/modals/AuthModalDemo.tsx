import * as React from "react";
import { AuthModal, Button } from "njm-react-component-library";

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
      />
      <Button onClick={toggleAuthModal}>Toggle Auth Modal</Button>
    </>
  );
};
