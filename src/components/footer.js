import React from "react"
import { defaultFieldResolver } from "graphql";



const Footer = () => {

    return (
        <>
        <footer style={{ display: `flex`, justifyContent: `center` }}>
        <a href="https://www.gatsbyjs.org"
          style={{
            textDecoration: `none`,
            fontSize: `1.2rem`,
            fontFamily: `sans-serif`,
            fontWeight: `bold`,
            margin: `1rem`,
            color: `white`
          }}
        >
          © {new Date().getFullYear()}
          {` `} - Made with Gatsby, ☕️ , and a ⌨️ </a>
      </footer>
      </>
    )
}



export default Footer;