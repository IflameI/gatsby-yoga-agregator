import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import MapSection from "./map/mapSection"

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
        <MapSection />
      </div>
    </div>
  </section>
)

export default Main
