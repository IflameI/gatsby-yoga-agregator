import React from "react"
import { YMaps } from "react-yandex-maps"
import MainMap from "./map"

const MapSection = () => {
  return (
    <YMaps>
      <div className="main__map">
        <MainMap />
      </div>
    </YMaps>
  )
}

export default MapSection
