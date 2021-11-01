import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ListItem = () => (
  <div className="list__item">
    <h2 className="list__title">Lampa</h2>
    <div className="list__place">ул. Липовой рощи 2к2 Раздоры</div>
    <div className="list__price">11900 - 14900₽/мес</div>
    <p className="list__text">Описание места</p>
  </div>
)

export default ListItem
