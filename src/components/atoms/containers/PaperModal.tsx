import * as React from "react";
import { Paper } from "./Paper";
import { Modal } from "./Modal";
import styled, { css } from "styled-components";
import { CloseIcon } from "../icons/CloseIcon";
import { ThemeContext } from "../../../styleConstants";
import { StyleConstant } from "../../../typeUtilities";

export const PaperModal: React.SFC<IOwnProps> = ({
  children,
  onRequestClose: handleRequestClose,
  isOpen,
  useMargin = true
}) => {
  const { spacing } = React.useContext(ThemeContext);
  return (
    <Modal isOpen={isOpen} onRequestClose={handleRequestClose}>
      <Paper>
        <CloseIcon onClick={handleRequestClose} style={iconStyle} />
        <Wrapper useMargin={useMargin} spacing={spacing}>
          {children}
        </Wrapper>
      </Paper>
    </Modal>
  );
};

// types
interface IOwnProps {
  isOpen: boolean;
  children: React.ReactNode;
  useMargin?: boolean;
  onRequestClose: () => void;
}

interface DisplayProps {
  spacing: StyleConstant<"spacing">;
  useMargin: boolean;
}

const Wrapper = styled("div")<DisplayProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${p =>
    p.useMargin &&
    css<DisplayProps>`
      margin: ${p => `${p.spacing.ss8} ${p.spacing.ss8} 0 ${p.spacing.ss8}}`};
    `}
`;

const iconStyle: React.CSSProperties = {
  position: "absolute",
  right: "52px",
  top: "57px"
};
