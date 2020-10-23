import React from "react"
import {Link} from "gatsby"

const pageStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh"
}

const Home = () => {
  return (
      <div style={pageStyles}>
        <div>
          <h1>Pages</h1>
          <Link style={{display: 'block'}} to="/sponsors">Sponsors</Link>
          <Link style={{display: 'block'}} to="/contact">Contact</Link>
        </div>
      </div>
  )
}

export default Home