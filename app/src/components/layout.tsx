import React from "react"
import { Link } from "gatsby"
import { BrowserRouter } from 'react-router-dom';


interface Props {
  location: Location
  title: string
  children?: any
}

const Layout = ({ location, title, children }: Props) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
	<BrowserRouter basename={process.env.PUBLIC_URL}>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
	  </BrowserRouter>
    </div>
  )
}

export default Layout