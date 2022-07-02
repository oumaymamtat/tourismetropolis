import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from "axios"

axios.defaults.withCredentials=true;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>
      <h1 className="text-primary text-center">Home Page</h1> <br />
    </p>
  </Layout>
)

export default IndexPage
