import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Main = () => (
  <section className="main">
    <div className="main__row">
      <div className="main__column">
        <div className="main__image">
          <StaticImage src="../images/main.jpg" alt="Girl" />
          <div className="main__info">
            <h1 className="main__title">YOGA-СТУДИИ</h1>
            <p className="main__text">Лучшие студии йоги в одном месте</p>
          </div>
        </div>
      </div>
      <div className="main__column">
        <div className="main__map">
          <StaticImage src="../images/map.jpg" alt="Map" />
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
      </div>
    </div>
  </section>
)

export default Main
