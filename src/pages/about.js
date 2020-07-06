import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        Hey, I am Nicholas I am a growing software engineer looking to contribute to a company!
      </p>
      <Link to="/">Home</Link>
    </Layout>
  )
} 