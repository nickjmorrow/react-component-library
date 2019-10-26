import { ColorVariant } from '../../atoms';
import { StyleConstant } from '~/typeUtilities';

type SvgProps = React.PropsWithoutRef<JSX.IntrinsicElements['svg']>;

type DefaultSvgProps = {
    sizeVariant?: IconSizeVariant;
    colorVariant?: ColorVariant;
    style?: React.CSSProperties;
    className?: string;
};

export type IconProps = DefaultSvgProps & SvgProps;

export type IconSizeVariant = 1 | 2 | 3 | 4;
export type IconDisplayProps = {
    sizeVariant: IconSizeVariant;
    colorVariant: ColorVariant;
    iconSizes: StyleConstant<'icons'>['iconSizes'];
    colors: StyleConstant<'colors'>;
    transitions: StyleConstant<'transitions'>;
} & SvgProps;
