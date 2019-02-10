import * as React from "react";

export const LoadingIcon: React.SFC<IOwnProps> = () => {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "24px", width: "24px", position: "absolute" }}
      viewBox="0 0 100 100">
      <g transform="rotate(52.7306 50 50)">
        <path
          d="M50 15A35 35 0 1 0 74.787 25.213"
          fill="none"
          ng-attr-stroke="{{config.color}}"
          ng-attr-stroke-width="{{config.width}}"
          stroke="currentColor"
          stroke-width="12"
        />
        <path
          ng-attr-d="{{config.darrow}}"
          ng-attr-fill="{{config.color}}"
          d="M49 3L49 27L61 15L49 3"
          fill="currentColor"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
};

// types
interface IOwnProps {}
