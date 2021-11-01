import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ListItem from "./listItem"

const List = () => (
  <section className="list">
    <div className="container">
      <div className="list__row">
        <div className="list__column">
          <ListItem />
        </div>
        <div className="list__column">
          <ListItem />
        </div>
        <div className="list__column">
          <ListItem />
        </div>
        <div className="list__column">
          <ListItem />
        </div>
      </div>
    </div>
  </section>
)

export default List
