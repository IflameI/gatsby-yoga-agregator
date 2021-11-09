import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import InternalItem from "../components/Internal/InternalItem"

const InternalPage = ({ data }) => {
  return (
    <Layout>
      <section className="internal">
        <div className="internal__image">
          <StaticImage src="../images/internal.jpg" alt="Girl" />
        </div>
        <div className="container">
          <div className="internal__content">
            <InternalItem data={data} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default InternalPage

export const pageQuery = graphql`
  query OneYoga($url: String) {
    allMongodbYogasYoga(filter: { id: { eq: $url } }) {
      edges {
        node {
          address
          price
          description
          title
          site
          tel
        }
      }
    }
  }
`
