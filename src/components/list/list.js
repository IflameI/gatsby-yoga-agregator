import * as React from "react"
import { useSelector } from "react-redux"

import ListItem from "./listItem"

const List = () => {
  const placies = useSelector(state => state.placies.placiesItems)
  return (
    <section className="list">
      <div className="container">
        <div className="list__row">
          {placies.map(item => (
            <div className="list__column">
              <ListItem key={item.node.id} item={item.node} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default List
