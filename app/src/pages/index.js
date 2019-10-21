import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
  Button,
  ThemeContext,
  getThemeFromNewInputs,
  Typography,
} from "@nickjmorrow/react-component-library"

// Add this in your component file
require("react-dom")
window.React2 = require("react")
console.log(window.React1 === window.React2)

const initialThemeInputs = {
  colors: {
    core: {
      hue: 210,
      middleLightness: 50,
      saturation: 60,
    },
    accent: {
      hue: 267,
    },
    success: {
      hue: 148,
      saturation: 55,
    },
    warning: {
      hue: 49,
      hueDecrement: 6,
      lightnessDecrement: 4,
      saturation: 72,
    },
    danger: {
      hue: 344,
    },
  },
  typography: {
    fontFamily: { default: "Questrial, sans-serif" },
  },
  defaultShowBoxShadow: false,
}

const IndexPage = () => {
  const [themeInputs, setThemeInputs] = React.useState(initialThemeInputs)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <ThemeContext.Provider value={getThemeFromNewInputs(themeInputs)}>
<Typography>
          Hello!
        </Typography>
      </ThemeContext.Provider>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
