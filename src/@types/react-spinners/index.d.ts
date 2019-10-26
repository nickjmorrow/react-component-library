interface Props {
    color?: string;
    size?: number;
    sizeUnit?: 'px';
    style?: React.CSSProperties;
}

declare module 'react-spinners' {
    import React = require('react');

    export class ClipLoader extends React.Component {}
}

declare module 'react-spinners/ClipLoader' {
    export default class ClipLoader extends React.Component<Props> {}
}

declare module 'react-spinners/PulseLoader' {
    export default class PulseLoader extends React.Component<Props> {}
}
