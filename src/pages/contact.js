import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Get In Touch" />
    <h1 style={{ color: `white`}}>Get In Touch 🙋‍♂️</h1>
    <p style={{ color: `white`}}>Let's get in touch or connect!</p>
    <form>
      <input placeholder={`Email...`}/>{` `}
      <input placeholder={`Subject`}/>
      <textarea/>
    </form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
