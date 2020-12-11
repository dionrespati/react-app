import React, { Component } from "react";

class Stuff extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let result = await (response.ok ? response.json() : undefined)
    this.setState({
      data: result
    })
  }

  render() {
    return (
      <ul>
        {this.state.data.map((el, i) => <li key={i}>{ el.body }</li>)}
      </ul>
    )
  }
}

export default Stuff