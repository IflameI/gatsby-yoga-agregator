import React from "react"
import { YMaps, Map, Placemark } from "react-yandex-maps"

const MainMap = () => {
  const coords = [
    [56.831088, 60.594851],
    [56.8407, 60.618738],
    [56.819691, 60.618217],
    [56.827468, 60.600205],
    [56.836584, 60.654922],
    [56.863168, 60.654607],
    [56.785009, 60.535176],
    [56.79999, 60.629401],
  ]
  return (
    <YMaps>
      <div className="main__map">
        <Map
          width={900}
          height={400}
          defaultState={{ center: [56.838011, 60.597474], zoom: 11 }}
        >
          {coords.map((item, index) => (
            <>
              {console.log(item)}
              <Placemark key={`${index}__${item[0]}`} geometry={item} />
            </>
          ))}
        </Map>
        <div className="main__category">
          <div className="main__button">
            <button>Фильтр 1</button>
          </div>
          <div className="main__button">
            <button>Фильтр 2</button>
          </div>
          <div className="main__button">
            <button>Фильтр 3</button>
          </div>
        </div>
      </div>
    </YMaps>
  )
}

export default MainMap
