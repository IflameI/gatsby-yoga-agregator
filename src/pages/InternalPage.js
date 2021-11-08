import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const InternalPage = ({ data }) => {
  console.log()
  return (
    <Layout>
      <section className="internal">
        <div className="internal__image">
          <StaticImage src="../images/internal.jpg" alt="Girl" />
        </div>
        <div className="container">
          <div className="internal__content">
            <div className="internal__item">
              <h1 className="internal__title">
                {data.allMongodbYogasYoga.edges[0].node.title}
              </h1>
              <p className="internal__desc">
                {data.allMongodbYogasYoga.edges[0].node.description}
              </p>
              <div className="internal__cost">
                <span className="internal__dec">Средняя стоимость:</span>
                {data.allMongodbYogasYoga.edges[0].node.price}
              </div>
              <div className="internal__info">
                <div className="internal__info-title">
                  Контактная информация
                </div>
                <div className="internal__address">
                  <span className="internal__dec">Адрес:</span>
                  {data.allMongodbYogasYoga.edges[0].node.address}
                </div>
                <div className="internal__телефон">
                  <span className="internal__dec">Телефон:</span>
                </div>
                <div className="internal__address">
                  <span className="internal__dec">Сайт:</span>
                </div>
              </div>
            </div>
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
        }
      }
    }
  }
`
