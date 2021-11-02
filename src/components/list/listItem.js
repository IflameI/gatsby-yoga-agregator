import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ListItem = ({ item }) => {
  return (
    <div className="list__item">
      <div className="list__top">
        <h2 className="list__title">{item.title}</h2>
        <StaticImage src="../../images/ico.svg" width={50} height={50} />
      </div>
      <div className="list__place">{item.address}</div>
      <div className="list__price">{item.price}</div>
      <p className="list__text">{item.description}</p>
    </div>
  )
}

export default ListItem
