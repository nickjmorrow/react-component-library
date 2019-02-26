import * as React from "react";
import { Paper } from "./Paper";
import { Modal } from "./Modal";
import styled from "styled-components";
import { CloseIcon } from "../icons/CloseIcon";
import { ThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";

export const PaperModal: React.SFC<IOwnProps> = ({
  children,
  onRequestClose: handleRequestClose,
  isOpen
}) => {
  const { spacing } = React.useContext(ThemeContext);
  return (
    <Modal isOpen={isOpen} onRequestClose={handleRequestClose}>
      <Paper>
        <CloseIcon onClick={handleRequestClose} style={iconStyle} />
        <Wrapper spacing={spacing}>{children}</Wrapper>
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

const Wrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${p => `${p.spacing.ss8} ${p.spacing.ss8} 0 ${p.spacing.ss8}}`};
`;

const iconStyle: React.CSSProperties = {
  position: "absolute",
  right: "52px",
  top: "57px"
};
