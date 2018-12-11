import React from "react"

export interface HelloProps {
  compiler: string
  framework: string
}

export class Hello extends React.Component<HelloProps> {
  render() {
    const { compiler, framework } = this.props
    return (
      <h1>
        Hello from {compiler} and {framework}!
      </h1>
    )
  }
}
