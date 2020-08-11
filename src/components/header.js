import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image_icon"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#15202b`,
      marginBottom: `.60rem`,
    }}
  >
    <div
      style={{
        margin: `.5rem auto`,
        maxWidth: 980,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `flex-end`,
      }}
    >
      <h3 style={{ margin: 10 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
         🏠 Home
        </Link>
        </h3>
        <h3 style={{ margin: 10}}>
        <Link
          to="/project/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
         💻 Projects
        </Link>
        </h3>
        <h3 style={{ margin: 10}}>
          <Link
            to="/contact"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
           📨 Contact
        </Link>
        </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
