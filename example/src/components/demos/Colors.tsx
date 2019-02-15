import * as React from "react";
import { ThemeContext, getStyles } from "njm-react-component-library";
import styled from "styled-components";

export const Colors: React.SFC = () => {
  const theme = React.useContext(ThemeContext);
  const { colors } = getStyles(theme);
  return (
    <BlocksWrapper>
      <Wrapper>
        <Block color={colors.primary.lightest} />
        <Block color={colors.primary.lighter} />
        <Block color={colors.primary.light} />
        <Block color={colors.primary.main} />
        <Block color={colors.primary.dark} />
        <Block color={colors.primary.darker} />
        <Block color={colors.primary.darkest} />
      </Wrapper>
      <Wrapper>
        <Block color={colors.secondary.lightest} />
        <Block color={colors.secondary.lighter} />
        <Block color={colors.secondary.light} />
        <Block color={colors.secondary.main} />
        <Block color={colors.secondary.dark} />
        <Block color={colors.secondary.darker} />
        <Block color={colors.secondary.darkest} />
      </Wrapper>
      <Wrapper>
        <Block color={colors.gray.lightest} />
        <Block color={colors.gray.lighter} />
        <Block color={colors.gray.light} />
        <Block color={colors.gray.main} />
        <Block color={colors.gray.dark} />
        <Block color={colors.gray.darker} />
        <Block color={colors.gray.darkest} />
      </Wrapper>
      <Wrapper>
        <Block color={colors.red.lightest} />
        <Block color={colors.red.lighter} />
        <Block color={colors.red.light} />
        <Block color={colors.red.main} />
        <Block color={colors.red.dark} />
        <Block color={colors.red.darker} />
        <Block color={colors.red.darkest} />
      </Wrapper>
      <Wrapper>
        <Block color={colors.yellow.lightest} />
        <Block color={colors.yellow.lighter} />
        <Block color={colors.yellow.light} />
        <Block color={colors.yellow.main} />
        <Block color={colors.yellow.dark} />
        <Block color={colors.yellow.darker} />
        <Block color={colors.yellow.darkest} />
      </Wrapper>
      <Wrapper>
        <Block color={colors.success.lightest} />
        <Block color={colors.success.lighter} />
        <Block color={colors.success.light} />
        <Block color={colors.success.main} />
        <Block color={colors.success.dark} />
        <Block color={colors.success.darker} />
        <Block color={colors.success.darkest} />
      </Wrapper>
    </BlocksWrapper>
  );
};

const BlocksWrapper = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Block = styled("div")<{ color: string }>`
  width: 50px;
  height: 50px;
  margin: 6px;
  border-radius: 4px;
  background-color: ${props => props.color};
`;
