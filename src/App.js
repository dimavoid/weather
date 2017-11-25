import React, { Component } from "react";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import WeatherDisplay from "./WeatherDisplay";

const CITIES = [
  { "id": 524901, "name": "Moscow" },
  { "id": 498817, "name": "Saint Petersburg" },
  { "id": 542420, "name": "Krasnodar" },
  { "id": 491422, "name": "Sochi" },
  { "id": 524305, "name": "Murmansk" }
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeCity: 0
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(index) {
    this.setState({ activeCity: index });
  }

  render() {
    const activeCity = this.state.activeCity;
    const cityBtn = CITIES.map((city, index) => (
      <NavItem key={index} eventKey={index}>{city.name}</NavItem>
    ));
    return (
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            React Simple Weather App
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      <Grid>
        <Row>
          <Nav
            bsStyle="tabs"
            justified
            activeKey={activeCity}
            onSelect={this.handleSelect}
          >
            {cityBtn}
          </Nav>
        </Row>
        <Row>
          <WeatherDisplay key={activeCity} id={CITIES[activeCity].id} />
        </Row>
      </Grid>
    </div>
    );
  }
}

export default App;