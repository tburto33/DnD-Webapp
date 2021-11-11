import React from 'react';
import './App.css';
import dndheader from './dnd.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MainButton from './Components/Button';
import SaveBlock from './Components/SaveBlock';
import StatBlock from './Components/StatBlocks';
import SkillsBlock from './Components/SkillsBlock';
import CharStats from './Components/Stats';
import Descriptions from './Components/Descriptions';

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
      <body class="App-body">
        <Container fluid>
          <Row md="auto">
            <Col>
              <CharStats name="Race:" item='charRace' />
            </Col>
            <Col>
              <CharStats name="Class:" item='charClss' />
            </Col>
            <Col>
              <CharStats name="HP:" item='charHp' />
            </Col>
          </Row>
          <Row>
          <Col>
          <CharStats name="Initiative:" />
            </Col>
            <Col>
            <CharStats name="Speed:" />
            </Col>
            <Col>
            <CharStats name="AC:" />
            </Col>
          </Row>
          <CharStats />
        </Container>
        <Container fluid>
          <Row>
            <Col >
              <StatBlock statType="Strength" ability='str' mod='str' />
              <StatBlock statType="Dexterity" ability='dex' mod='dex' />
              <StatBlock statType="Constitution" ability='cons' mod='cons' />
              <StatBlock statType="Intelligence" ability='int' mod='int' />
              <StatBlock statType="Wisdom" ability='wis' mod='wis' />
              <StatBlock statType="Charisma" ability='char' mod='char' />
            </Col>
            <Col>
              <SaveBlock />
              <SkillsBlock />
            </Col>
            <Col xs={7} class="desc-block">
              <div class="desc-block">
                <p>
                  <b>Race/Class Description Here</b>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, quo cetero convenire no. Qui eu accusata intellegebat, eu summo simul philosophia mea. An tota magna essent nec, mea ne primis dicunt accusam.
                </p>  
              </div>
              <div class="desc-block">
                <p>
                  <b>Spell/Attack Desctiption Here</b>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, quo cetero convenire no. Qui eu accusata intellegebat, eu summo simul philosophia mea. An tota magna essent nec, mea ne primis dicunt accusam.
                </p>
              </div>
              <div class="desc-block">
                <p>
                  <b>Equipment Here</b>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, quo cetero convenire no. Qui eu accusata intellegebat, eu summo simul philosophia mea. An tota magna essent nec, mea ne primis dicunt accusam.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
