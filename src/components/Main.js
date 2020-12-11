import React, { Component } from "react"
import { NavLink, HashRouter } from "react-router-dom"
import {
  Container,
  Tabs,
  Tab,
  Paper
} from "@material-ui/core"
import Pages from "./Pages";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <div>
            <h1>React Router</h1>
            <Paper>
              <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <NavLink exact to="/"><Tab label="Home" /></NavLink>
                <NavLink to="stuff"><Tab label="Stuff" /></NavLink>
                <NavLink to="contact"><Tab label="Contact" /></NavLink>
              </Tabs>
            </Paper>
            <Pages />
          </div>
        </Container>
      </HashRouter>
    )
  }
}

export default Main