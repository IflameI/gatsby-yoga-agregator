import React from "react"
import { useSelector } from "react-redux"

import { Map, Placemark } from "react-yandex-maps"

const coordsEkb = [
  [56.831088, 60.594851],
  [56.8407, 60.618738],
  [56.819691, 60.618217],
  [56.827468, 60.600205],
  [56.836584, 60.654922],
  [56.863168, 60.654607],
  [56.785009, 60.535176],
  [56.79999, 60.629401],
]

const coordsMsk = [
  [55.815069, 37.574866],
  [55.73753, 37.6293],
  [55.72718, 37.52946],
  [55.7629, 37.63548],
  [55.66469, 37.613225],
  [55.74688, 37.422295],
]

const coordsKz = [
  [55.74763, 49.21003],
  [55.79059, 49.10067],
  [55.789827, 49.105518],
  [55.82689, 49.08505],
  [55.78715, 49.14169],
]

const MainMap = () => {
  const { currentArea } = useSelector(state => state.placies)

  return (
    <>
      <Map
        width={900}
        height={400}
        defaultState={{ center: [56.838011, 60.597474], zoom: 4 }}
      >
        {currentArea === "ekb"
          ? coordsEkb.map((item, index) => (
              <Placemark key={`${index}__${item[0]}`} geometry={item} />
            ))
          : currentArea === "msk"
          ? coordsMsk.map((item, index) => (
              <Placemark key={`${index}__${item[0]}`} geometry={item} />
            ))
          : coordsKz.map((item, index) => (
              <Placemark key={`${index}__${item[0]}`} geometry={item} />
            ))}
      </Map>
    </>
  )
}

export default MainMap
