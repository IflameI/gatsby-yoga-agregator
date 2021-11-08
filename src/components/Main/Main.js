import * as React from "react"

import MainSection from "./MainSection"
import List from "../List/List"

const Main = ({ data }) => (
  <>
    <MainSection />
    <List data={data} />
  </>
)

export default Main
