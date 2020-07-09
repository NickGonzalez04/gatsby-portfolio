import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ color: `white`}}>Hi, I am Nicholas!😄</h1>
    <p>Check out some projects I have been apart of.</p>
    <p>Building something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <div>
      <a href="https://www.linkedin.com/in/nicholasgonzalez1/"> style={{
               margin: `1rem`,
              color: `white`,
              textDecoration: `none`,
              fontFamily: `sans-serif`,
              fontWeight: `bold`,
            }}> LinkedIn </a>
      <a href="https://twitter.com/NickGonzalez__" style={{
               margin: `1rem`,
              color: `white`,
              textDecoration: `none`,
              fontFamily: `sans-serif`,
              fontWeight: `bold`,
            }}> Twitter</a>
      <a href="https://github.com/NickGonzalez04" style={{
              margin: `1rem`,
              color: `white`,
              textDecoration: `none`,
              fontFamily: `sans-serif`,
              fontWeight: `bold`,
            }}>GitHub</a>
      <a href="gonzaleznick5@gmail.com" style={{
              margin: `1rem`,
              color: `white`,
              textDecoration: `none`,
              fontFamily: `sans-serif`,
              fontWeight: `bold`,
            }}>Gmail</a>
    </div>
  </Layout>
)

export default IndexPage
