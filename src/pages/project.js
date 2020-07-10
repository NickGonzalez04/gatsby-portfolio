import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Projects = () =>{
  // Query data for projects
  return (
    <div>
      <SEO title='/projects' />
      <div style={{ display: `flex`, justifyContent: `center` }}>
        <h1 style={{ color: `white` }}>The Work </h1>
      </div>
      <div style={{
        display: `flex`,
        flexWrap: `wrap`,
        margin: `0 auto`,
        maxWidth: 960,
        justifyContent: `space-around`
      }}
      >
        <div style={{ border: `2px solid #38444d`, borderRadius: `5px`, width: `100%`, display: `flex`,justifyContent: `center`}}>
          <h3>Project 1</h3>
        </div>
        <div style={{ border: `2px solid #38444d`, borderRadius: `5px`, width: `50%`,display: `flex`,justifyContent: `center`}}>
          <h3>Project 2</h3>
        </div>
        <div style={{ border: `2px solid #38444d`, borderRadius: `5px`, width: `50%`,display: `flex`,justifyContent: `center`}}>
          <h3>Project 3</h3>
        </div>
      </div>
      <Link to="/">Home</Link>
    </div>
  )
} 

export default Projects