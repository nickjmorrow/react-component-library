import * as React from "react";
import { LogOutModal, Button } from "react-component-library";

export const LogoutModalDemo: React.SFC = () => {
  const noOp = () => {
    return;
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const handleRequestClose = () => setIsOpen(false);
  const toggleLogoutModal = () => setIsOpen(currentIsOpen => !currentIsOpen);
  return (
    <>
      <LogOutModal
        isOpen={isOpen}
        onRequestClose={handleRequestClose}
        onPrimaryClick={noOp}
      />
      <Button onClick={toggleLogoutModal}>Toggle Logout Modal</Button>
    </>
  );
};
