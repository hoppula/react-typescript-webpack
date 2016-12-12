import * as React from "react"
import * as renderer from "react-test-renderer"

import { Hello } from "../Hello"

it("Hello renders correctly", () => {
  const tree = renderer.create(<Hello compiler="TypeScript" framework="React" />).toJSON()
  expect(tree).toMatchSnapshot()
})
