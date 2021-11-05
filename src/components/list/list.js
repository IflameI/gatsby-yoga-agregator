import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPlacies } from "../../store/actions/placies"

import ListItem from "./listItem"

const List = ({ data }) => {
  const dispatch = useDispatch()
  const { placiesItems, currentArea } = useSelector(state => state.placies)

  const filteredPosts = data.allMongodbYogasYoga.edges.filter(({ node }) => {
    return node.area === currentArea
  })

  React.useEffect(() => {
    dispatch(setPlacies(filteredPosts))
  }, [currentArea])

  return (
    <section className="list">
      <div className="container">
        <div className="list__row">
          {placiesItems &&
            placiesItems.map(item => (
              <div key={item.node.id} className="list__column">
                <ListItem item={item.node} />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default List
