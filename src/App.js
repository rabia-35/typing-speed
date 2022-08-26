import './App.css';
import CountDown from './components/countDown';
import Text from './components/text';
import {Container, Row, Col} from "react-bootstrap"
import Again from './components/again';
import Language from './components/language';

function App() {
  return (
    <div className="App pt-5">
      <Container>
        <Row>
          <Col xs={12} lg={10}> 
              <Text /> 
          </Col>
          <Col className='left-panel'> 
            <CountDown /> 
            <Again />
            <Language />
          </Col>
        </Row>
      </Container>
       
       
    </div>
  );
}

export default App;
