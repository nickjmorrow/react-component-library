import * as React from "react";
import styled from "styled-components";
import { GetComponentProps } from "~/typeUtilities";
import { googleColors } from "~/styleConstants";
import { Button, Typography, GoogleIcon } from "~/components/atoms";

export const GoogleButton: React.SFC<{ onClick: () => void }> = ({
  onClick: handleClick
}) => {
  const googleColorSet: GetComponentProps<typeof Button>["colorSet"] = {
    color: "white",
    colorHover: "white",
    colorActive: "white",
    backgroundColor: googleColors.color,
    backgroundColorHover: googleColors.colorHover,
    backgroundColorActive: googleColors.colorActive
  };
  return (
    <Button
      onClick={handleClick}
      colorSet={googleColorSet}
      styleVariant={"primary"}
      isFullWidth={true}>
      <FlexWrapper>
        <GoogleIcon colorVariant={"primaryLight"} sizeVariant={2} />
        <Typography
          style={{ textTransform: "uppercase", marginLeft: "4px" }}
          colorVariant={"primaryLight"}
          sizeVariant={2}
          weightVariant={2}>
          Sign In With Google
        </Typography>
      </FlexWrapper>
    </Button>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
