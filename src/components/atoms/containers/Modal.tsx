import * as React from "react";
const ReactModal = require("react-modal");
import Radium from "radium";
import { ThemeContext } from "../../../styleConstants";
const Style = Radium.Style;

export const Modal: React.SFC<IModalProps> = ({
  isOpen,
  children,
  onRequestClose: handleRequestClose
}) => {
  const { boxShadow } = React.useContext(ThemeContext);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "none"
    }
  };

  return (
    <>
      <Style
        rules={{
          ".ReactModalPortal > div": {
            opacity: 0,
            boxShadow: boxShadow.bs5
          },
          ".ReactModalPortal .ReactModal__Overlay": {
            transition: "opacity 200ms ease-in-out",
            background: "rgba(0, 0, 0, 0.15)"
          },
          ".ReactModalPortal .ReactModal__Overlay--after-open": {
            opacity: 1,
            backgroundColor: "rgba(0, 0, 0, 0.4) !important"
          },
          ".ReactModalPortal .ReactModal__Overlay--before-close": {
            opacity: 0
          }
        }}
      />
      <ReactModal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={handleRequestClose}
        closeTimeoutMS={100}
        appElement={undefined}>
        {children}
      </ReactModal>
    </>
  );
};

export interface IModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onRequestClose(): void;
}
