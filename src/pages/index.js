import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../components/main"
import List from "../components/list/list"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Main />
    <List />
  </Layout>
)

export default IndexPage
