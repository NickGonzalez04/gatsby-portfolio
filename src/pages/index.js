import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Projects from "./project"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 style={{ color: `white`, fontFamily: `sans-serif`}}>Hi, I'm Nicholas!</h2>
    <p style={{color: `white`,
              textDecoration: `none`, fontSize: `1.6rem`,
              fontFamily: `sans-serif`}}>I am Software Engineer living in South Florida 🌴 ☀️.</p>
    <p>Building something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Projects /> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <div>
      {/* <a href="https://www.linkedin.com/in/nicholasgonzalez1/"> style={{
              margin: `1rem`,
              color: `white`,
              textDecoration: `none`,
              fontFamily: `sans-serif`,
              fontWeight: `bold`,
            }}>LinkedIn</a> */}
      {/* <a href="https://twitter.com/NickGonzalez__" style={{
               margin: `1rem`,
              color: `white`,
              textDecoration: `none`,
              fontFamily: `sans-serif`,
              fontWeight: `bold`,
            }}>Twitter</a> */}
      {/* <a href="https://github.com/NickGonzalez04" style={{
              margin: `1rem`,
              color: `white`,
              textDecoration: `none`,
              fontFamily: `sans-serif`,
              fontWeight: `bold`,
            }}>GitHub</a> */}
      {/* <a href="gonzaleznick5@gmail.com" style={{
              margin: `1rem`,
              color: `white`,
              textDecoration: `none`,
              fontFamily: `sans-serif`,
              fontWeight: `bold`,
            }}>Gmail</a> */}
    </div>
  </Layout>
)

export default IndexPage
