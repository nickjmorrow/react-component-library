import * as React from "react";
import { TwoButtonModal } from "../organisms";

export const LogOutModal: React.SFC<IOwnProps> = ({
  isOpen,
  onRequestClose: handleRequestClose,
  onPrimaryClick: handlePrimaryClick
}) => {
  return (
    <TwoButtonModal
      isOpen={isOpen}
      onRequestClose={handleRequestClose}
      primaryButtonElement={"Log Out"}
      secondaryButtonElement={"Cancel"}
      title={"Log Out"}
      onPrimaryClick={handlePrimaryClick}
      onSecondaryClick={handleRequestClose}>
      Are you sure you want to log out?
    </TwoButtonModal>
  );
};

interface IOwnProps {
  isOpen: boolean;
  onRequestClose(): void;
  onPrimaryClick(): void;
}
