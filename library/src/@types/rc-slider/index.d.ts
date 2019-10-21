declare module "rc-slider" {
  import React = require("react");
  interface ICommonProps {
    min?: number;
    max?: number;
    handleStyle?: React.CSSProperties;
    trackStyle?: React.CSSProperties;
    railStyle?: React.CSSProperties;
    handle?(props: object): React.ReactNode;
    onChange?(value: number): void;
    onBeforeChange?(): void;
    onAfterChange?(): void;
  }

  interface ISliderProps extends ICommonProps {
    value: number;
  }

  interface IRangeProps extends ICommonProps {
    value: number[];
  }

  export default class Slider extends React.Component<ISliderProps> {}
}
