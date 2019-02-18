import * as React from "react";
import { Paper } from "./Paper";
import { Modal } from "./Modal";
import styled from "styled-components";
import { CloseIcon } from "../icons/CloseIcon";

export const PaperModal: React.SFC<IOwnProps> = ({
  children,
  onRequestClose: handleRequestClose,
  isOpen
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={handleRequestClose}>
      <Paper>
        <CloseIcon onClick={handleRequestClose} style={iconStyle} />
        <Wrapper>{children}</Wrapper>
      </Paper>
    </Modal>
  );
};

// types
interface IOwnProps {
  isOpen: boolean;
  children: React.ReactNode;
  onRequestClose: () => void;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
`;

const iconStyle: React.CSSProperties = {
  position: "absolute",
  right: "37px",
  top: "48px"
};
