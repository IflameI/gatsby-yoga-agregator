import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../components/main"
import List from "../components/list/list"
import Header from "../components/header"
import { useDispatch } from "react-redux"
import addPlacies from "../store/actions/addPlacies"

const IndexPage = ({ data }) => {
  const infoPlace = data.allMongodbYogasYoga.edges
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(addPlacies(infoPlace))
  }, [])
  return (
    <>
      <Header />
      <Layout>
        <Seo title="Home" />
        <Main />
        <List />
      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMongodbYogasYoga {
      edges {
        node {
          title
          address
          price
          description
          id
        }
      }
    }
  }
`
