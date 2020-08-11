import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Projects from "./project"
import About from "../pages/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 style={{ color: `white`, fontFamily: `sans-serif`}}>Hi, I'm Nicholas!</h2>
    <p style={{color: `white`,
              textDecoration: `none`, fontSize: `1.6rem`,
              fontFamily: `sans-serif`}}>I am Software Engineer living in South Florida 🌴 ☀️.</p>
    <p>Building something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    <About />
    <div>

    </div>
  </Layout>
)

export default IndexPage
