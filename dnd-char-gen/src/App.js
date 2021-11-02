import React from 'react';
import './App.css';
import dndheader from './dnd.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import { race, clss, hp, abilities, modifiers } from './Components/Button';
import MainButton from './Components/Button';
import SaveBlock from './Components/SaveBlock';
import StatBlock from './Components/StatBlocks';
import SkillsBlock from './Components/SkillsBlock';
import CharStats from './Components/Stats';

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
          <CharStats />
        </Container>
        <Container fluid>
          <Row>
            <Col sm={1}>
              <StatBlock statType="Strength" ability='str' mod='str' />
              <StatBlock statType="Dexterity" ability='dex' mod='dex' />
              <StatBlock statType="Constitution" ability='cons' mod='cons' />
              <StatBlock statType="Intelligence" ability='int' mod='int' />
              <StatBlock statType="Wisdom" ability='wis' mod='wis' />
              <StatBlock statType="Charisma" ability='char' mod='char' />
            </Col>
            <Col md={2}>
              <SaveBlock />
              <SkillsBlock />
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
