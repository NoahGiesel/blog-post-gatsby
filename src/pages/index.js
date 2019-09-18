import React from "react"
 
import Layout from "../components/layout"
import Menu from "../components/menu"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <h1>About us </h1>
         <p>Hello ! I'm Noah and this is my Gatsby Blog posting webpage. From here you can navigate to the "Blog Post" section by simply clicking on the navigation menu. You will find my weekly posts, give them a try ! :D</p>
           
        </div>
   </Layout>
)

export default IndexPage
