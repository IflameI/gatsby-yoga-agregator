import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ListItem = ({ item }) => {
  return (
    <div className="list__item">
      <Link to={`/place/${item.id}`}>
        <div className="list__top">
          <h2 className="list__title">{item.title}</h2>
          <StaticImage
            src="../../images/ico.svg"
            width={50}
            height={50}
            alt="signYoga"
          />
        </div>
        <div className="list__place">{item.address}</div>
        <div className="list__price">{item.price}</div>
        <p className="list__text">{item.description}</p>
      </Link>
    </div>
  )
}

export default ListItem
