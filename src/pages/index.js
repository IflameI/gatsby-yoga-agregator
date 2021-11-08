import * as React from "react"
import { graphql } from "gatsby"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../components/Main/Main"
import InternalPage from "./InternalPage"

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <Seo title="Home" />
        <Router>
          <Main path="/" data={data} />
          <InternalPage path="/place/:id" data={data} />
        </Router>
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
