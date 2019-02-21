import * as React from "react";
import styled, { StyledFunction } from "styled-components";
import { IValue } from "~/types";
import { colors, transitions, iconType } from "~/styleConstants";
import { Typography } from "~/components/atoms/Typography";

interface OwnProps {
  label: IValue;
  value?: number;
  icon?: iconType;
  color?: string;
  shouldShowIcon?: boolean;
  onClick(value: number): void;
}

export const LabelWithIcon: React.SFC<OwnProps> = props => {
  const { label, value, onClick, icon, shouldShowIcon } = props;

  const handleClickInternal = () => {
    onClick(value!);
  };

  const shouldRender =
    (shouldShowIcon === undefined && icon) || (shouldShowIcon && icon);

  return (
    <ItemWrapper color={props.color}>
      <Item>
        <Typography>{label}</Typography>
        {shouldRender && (
          <span onClick={handleClickInternal}>
            {/* <FontAwesomeIcon icon={icon!} style={iconStyle} /> */}
            TODO NJM: FIX THIS
          </span>
        )}
      </Item>
    </ItemWrapper>
  );
};

const Item = styled.div``;

// interface IItemWrapperProps {
// 	color?: string;
// }

// TODO: swap 'any' for IItemWrapperProps & React.HTMLProps<HTMLSpanElement>
const itemWrapper: StyledFunction<any> = styled.span;

export const ItemWrapper = itemWrapper`
    color: ${colors.background};
    &: hover {
        color: ${props => props.color || colors.core.main};
        transition: ${transitions.medium};
    }
`;
