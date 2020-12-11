import React, { Component } from "react"
import { Route } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Stuff from "./Stuff"

class Pages extends Component {
  render() {
    return (
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/stuff" component={Stuff} />
        <Route path="/contact" component={Contact} />
      </div>
    )
  }
}

export default Pages