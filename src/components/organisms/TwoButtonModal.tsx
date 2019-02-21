import * as React from "react";
import styled from "styled-components";
import { formattedTextNode, Typography } from "~/components/atoms/Typography";
import { IModalProps } from "~/components/atoms/containers";
import { PaperModal, Button } from "~/components";
import { colors, horizontalSpacing } from "~/styleConstants";
import { GetComponentProps } from "~/typeUtilities";

export const TwoButtonModal: React.SFC<IModalProps & IOwnProps> = ({
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
      <Typography sizeVariant={3}>{title}</Typography>
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
  return (
    <PaperModal isOpen={isOpen} onRequestClose={handleRequestClose}>
      <Wrapper>
        <TitleWrapper>{modalTitle}</TitleWrapper>
        <ChildrenContainer>
          {formattedTextNode(children, { colorVariant: "textPrimaryDark" })}
        </ChildrenContainer>
        <ButtonsContainer>
          <Button
            onClick={handleSecondaryClickInternal}
            colorVariant={"transparent"}
            showBoxShadow={false}
            textColorVariant={"primary"}>
            {secondaryButtonElement}
          </Button>
          <ButtonWrapper>
            <Button onClick={handlePrimaryClickInternal} useMargin={false}>
              {primaryButtonElement}
            </Button>
          </ButtonWrapper>
        </ButtonsContainer>
      </Wrapper>
    </PaperModal>
  );
};

// css
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0.75rem ${horizontalSpacing.default};
  background-color: ${colors.neutral.lighter};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ChildrenContainer = styled.div`
  margin: 2rem ${horizontalSpacing.default};
`;

const ButtonWrapper = styled.div`
  margin: 4px 0px 4px 4px;
`;

const TitleWrapper = styled.div`
  margin-left: ${horizontalSpacing.default};
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
