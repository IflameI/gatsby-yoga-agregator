import * as React from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import classNames from "classnames"
import { setCurrentArea } from "../../store/actions/placies"

const HeaderItem = ({ title, typeName, setActiveArea, activeArea }) => {
  const dispatch = useDispatch()
  const onChangeCurrentArea = currentArea => () => {
    setActiveArea(currentArea)
    dispatch(setCurrentArea(currentArea))
  }
  return (
    <li
      className={classNames({ menuActive: activeArea === typeName })}
      onClick={onChangeCurrentArea(typeName)}
    >
      {title}
    </li>
  )
}

HeaderItem.propTypes = {
  title: PropTypes.string,
  typeName: PropTypes.string,
}

export default HeaderItem
