import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
	  sourcemap: true,
	  globals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
	  sourcemap: true,
	  globals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
    }
  ],
  external: ["stream", "styled-components", "react", "react-dom"],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    resolve({
		browser: false
	}),
    typescript({
      rollupCommonJSResolveHack: true,
      objectHashIgnoreUnknownHack: true
    }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/react-is/index.js": [
          "isValidElementType",
          "isElement",
          "ForwardRef"
        ],
        "node_modules/react-collapse/lib/index.js": ["Collapse"]
      }
    })
  ]
};
