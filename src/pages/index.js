import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../components/main"
import List from "../components/list/list"
import Header from "../components/header/header"

const IndexPage = ({ data }) => {
  return (
    <>
      <Header />
      <Layout>
        <Seo title="Home" />
        <Main />
        <List data={data} />
      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query AllYogas {
    allMongodbYogasYoga {
      edges {
        node {
          id
          area
          title
          address
          price
          description
        }
      }
    }
  }
`
