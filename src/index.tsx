import * as React from "react"
import * as ReactDOM from "react-dom"

import { Hello } from "./components/Hello"

const exampleElement = document.getElementById("example")

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  exampleElement
)

// webpack hot module replacement support
if (module.hot) {
  module.hot.accept("./components/Hello", () => {
    const NextHello = require("./components/Hello").Hello
    ReactDOM.render(
      <NextHello compiler="TypeScript" framework="React" />,
      exampleElement
    )
  })
}
