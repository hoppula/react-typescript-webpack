import React from "react"
import ReactDOM from "react-dom"
import { Hello } from "./components/Hello"

const appContainer = document.getElementById("example")

ReactDOM.render(<Hello compiler="TypeScript" framework="React" />, appContainer)

if (module.hot) {
  module.hot.accept("./components/Hello", () => {
    const NextHello = require("./components/Hello").Hello
    ReactDOM.render(
      <NextHello compiler="TypeScript" framework="React" />,
      appContainer
    )
  })
}
