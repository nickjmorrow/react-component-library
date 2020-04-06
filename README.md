# React Component Library

[![NPM](https://img.shields.io/npm/v/react-component-library.svg)](https://www.npmjs.com/package/react-component-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The live demo can be found [here](https://nickjmorrow.github.io/react-component-library/).

## At a Glance

-   The component library uses [Rollup](https://github.com/rollup/rollup) for the [build pipeline](https://github.com/ezolenko/rollup-plugin-typescript2).
-   The component library and the demo application are built in [TypeScript](https://www.typescriptlang.org/).
-   [Styled components](https://styled-components.com/) are used for styling and theming.

## Purpose

I wanted a set of reusable components and styles to use across my personal projects. This component library prioritizes **consistent design** guidelines while allowing for **easy departures**.

## Install

```bash
npm install --save @nickjmorrow/react-component-library
```

## Usage

```tsx
import * as React from 'react';
import { Typography } from '@nickjmorrow/react-component-library';

const SomeOtherComponent: React.FC = () => {
    return <Typography>Hello, World!</Typography>;
};
```

## License

MIT © [nickjmorrow](https://github.com/nickjmorrow)
