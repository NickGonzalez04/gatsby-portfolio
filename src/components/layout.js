/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          borderTop: `2px solid #38444d`
        }}
      >
        <main>{children}</main>
        <footer style={{ display: `flex`, justifyContent: `center` }}>
          <a href="https://www.gatsbyjs.org"
            style={{
              textDecoration: `none`,
              fontSize: `1.5rem`,
              fontFamily: `sans-serif`,
              fontWeight: `bold`,
              margin: `1rem`,
              color: `white`
            }}
          >
            © {new Date().getFullYear()}
            {` `} Gatsby ☕️ and a ⌨️ </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
