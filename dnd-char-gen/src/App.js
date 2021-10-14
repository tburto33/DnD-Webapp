import './App.css';
import dndheader from './dnd.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import CharStats from './Stats';
// import { characterData } from './Button';
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
      <Container fluid>
        <Row>
          <Col>Player Name: </Col>
          <Col>Race:</Col>
          <Col>Class:</Col>
        </Row>
        <Row>
        <Col>Char Name: </Col>
        <Col>Sex: </Col>
        <Col>Hit Points: </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <StatBlock statType="Strength" statMod="9" statTotal="-1"/>
            <StatBlock statType="Dexterity" statMod="14" statTotal="2"/>
            <StatBlock statType="Constitution" statMod="18" statTotal="4"/>
            <StatBlock statType="Intelligence" statMod="11" statTotal="0"/>
            <StatBlock statType="Wisdom" statMod="18" statTotal="4"/>
            <StatBlock statType="Charisma" statMod="9" statTotal="-1"/>
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
