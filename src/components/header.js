import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image_icon"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#15202b`,
      marginBottom: `1.45rem`,
    }}
  >
  {/* <Image  /> */}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1160,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `flex-end`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 8, borderBottom: `2px solid #38444d` }}>
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
        <h3 style={{ margin: 8, borderBottom: `2px solid #38444d` }}>
        <Link
          to="/projects"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
         💻 Projects
        </Link>
        </h3>
        <h3 style={{ margin: 8, borderBottom: `2px solid #38444d`}}>
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
