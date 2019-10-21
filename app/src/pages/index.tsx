import React from "react"
import { Link } from "gatsby"
import { BrowserRouter } from "react-router-dom";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
  Button,
  ThemeContext,
  getThemeFromNewInputs,
  Typography,
} from "@nickjmorrow/react-component-library"
import { ButtonDemo } from "./button-demo";

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
	  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeContext.Provider value={getThemeFromNewInputs(themeInputs)}>
<Typography>
          Hello!
        </Typography>
      </ThemeContext.Provider>
	  </BrowserRouter>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
