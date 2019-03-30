import * as React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../styleConstants";
import { GetComponentProps, StyleConstant } from "../../typeUtilities";
import { Button, getFormattedTextNode, PaperModal, Typography } from "../atoms";

type ModalProps = GetComponentProps<typeof PaperModal>;

export const TwoButtonModal: React.SFC<ModalProps & IOwnProps> = ({
  isOpen,
  children,
  title,
  onRequestClose: handleRequestClose,
  primaryButtonElement,
  secondaryButtonElement,
  onPrimaryClick: handlePrimaryClick,
  onSecondaryClick: handleSecondaryClick
}) => {
  const modalTitle =
    title && typeof title === "string" ? (
      <Typography sizeVariant={5} weightVariant={5}>
        {title}
      </Typography>
    ) : (
      title
    );
  const handlePrimaryClickInternal = () => {
    handlePrimaryClick();
    handleRequestClose();
  };

  const handleSecondaryClickInternal = () => {
    handleSecondaryClick();
    handleRequestClose();
  };
  const {
    colors,
    spacing,
    border: { borderRadius }
  } = React.useContext(ThemeContext);

  return (
    <PaperModal
      isOpen={isOpen}
      onRequestClose={handleRequestClose}
      useMargin={false}>
      <Wrapper>
        <AboveButtons spacing={spacing}>
          <TitleWrapper spacing={spacing}>{modalTitle}</TitleWrapper>
          <ChildrenContainer spacing={spacing}>
            {getFormattedTextNode(children, {
              colorVariant: "primaryDark",
              sizeVariant: 4
            })}
          </ChildrenContainer>
        </AboveButtons>
        <ButtonsContainer
          spacing={spacing}
          colors={colors}
          borderRadius={borderRadius}>
          <Button
            onClick={handleSecondaryClickInternal}
            showBoxShadow={false}
            styleVariant={"tertiary"}
            textColorVariant={"core"}>
            {secondaryButtonElement}
          </Button>
          <Button onClick={handlePrimaryClickInternal} useMargin={false}>
            {primaryButtonElement}
          </Button>
        </ButtonsContainer>
      </Wrapper>
    </PaperModal>
  );
};

// css
const ButtonsContainer = styled("div")<{
  spacing: StyleConstant<"spacing">;
  colors: StyleConstant<"colors">;
  borderRadius: StyleConstant<"border">["borderRadius"];
}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ spacing: { ss8: padding, ss1 } }) => `${ss1} ${padding}`};
  background-color: ${({ colors }) => colors.neutral.cs3};
  padding-right: ${p => p.spacing.ss8};
  border-radius: ${({ borderRadius: { br1 } }) => `0 0 ${br1} ${br1}`};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const AboveButtons = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin: ${({ spacing: { ss8: margin } }) =>
    `${margin} ${margin} 0 ${margin}`};
`;

const ChildrenContainer = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin: 2rem ${p => p.spacing.ss2};
`;

const TitleWrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin-left: ${p => p.spacing.ss2};
`;

// types
interface IOwnProps {
  primaryButtonElement: React.ReactNode;
  secondaryButtonElement: React.ReactNode;
  secondaryButtonVariant?: GetComponentProps<typeof Button>["colorVariant"];
  title?: React.ReactNode;
  onPrimaryClick(): void;
  onSecondaryClick(): void;
}
