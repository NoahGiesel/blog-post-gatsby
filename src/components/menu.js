import React from "react"
import Link from "gatsby-link"

const menu = () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "10px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </div>
)

export default menu
