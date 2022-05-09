# React Component Library

[![NPM](https://img.shields.io/npm/v/react-component-library.svg)](https://www.npmjs.com/package/react-component-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The live demo can be found [here](https://nickjmorrow.github.io/react-component-library/).

## At a Glance

-   The component library uses [Rollup](https://github.com/rollup/rollup) for the [build pipeline](https://github.com/ezolenko/rollup-plugin-typescript2).
-   The component library and the demo application are built in [TypeScript](https://www.typescriptlang.org/).
-   [Styled components](https://styled-components.com/) are used for styling and theming.

## Purpose

I wanted a set of reusable components and styles to use across my personal projects. This component library prioritizes **consistent design** guidelines while allowing for **easy departures**.

## What I Like About It

- I'm really happy with the **theming** implementation. Consumers can describe what colors to use for various palettes, fonts, even spacing. Then, it gets applied to all components. This might be a bit too "wide" for some use cases, but it's been perfect for hobby projects, where I want to tweak the overall feel of a website and don't need to pay attention to specific components. 
- I use **TypeScript** for anything JS, and I think TS is doing a lot of work in this repo. Components all have TS-described prop definitions that make me feel confident everything's "wired together" appropriately. 

## What Could Be Different

- After working on a professional component library, I am 100% convinced that this library would benefit from being **packaged at the component-level** instead of the library-level. Every component should be it's own package with it's own version and name. This makes it far less disruptive to publish breaking changes, because instead of all breaking changes being in the same package, they're spread out across different component packages, allowing consumers to pick and choose what updates they bring in and how much time they devote to handling breaking changes. 
- **Accessibility** was _not_ a priority when I was writing this library, but after working with semantic HTML elements, ARIA, and keyboard navigation professionally, I think this would be a fantastic addition to the library. 

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
