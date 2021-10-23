import React from 'react';
import './App.css';
import dndheader from './dnd.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { race, clss, hp, abilities, modifiers } from './Components/Button';
import MainButton from './Components/Button';
import SaveBlock from './Components/SaveBlock';
import StatBlock from './Components/StatBlocks';
import SkillsBlock from './Components/SkillsBlock';

function App() {

  return (
    // Header
    <div className="App">
      <header className="App-header">
        <div class="col">
          <h1>ONESHOT</h1>
          <div class="col-sm text-center">
            <h6>A CHARACTER GENERATOR FOR</h6>
          </div>
          <div>
            <img class="img-fluid header-img" src={dndheader} alt="dnd-logo" />
          </div>
          <div class="col-sm text-center">
            <MainButton />
          </div>
        </div>
      </header>
      <Container fluid class="stat-block">
        <Row sm={3}>
          <Col>Race: {race}</Col>
          <Col>Class: {clss}</Col>
          <Col>Hit Points: {hp}</Col>
        </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col sm={1}>
              <StatBlock statType="Strength" />
              {/* <StatBlock statType="Dexterity" />
              <StatBlock statType="Constitution" />
              <StatBlock statType="Intelligence" />
              <StatBlock statType="Wisdom" />
              <StatBlock statType="Charisma" /> */}
            </Col>
            <Col md={2}>
              <SaveBlock />
              <SkillsBlock />
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
