import Form from './components/ConversionForm';
import {Col, Container, Jumbotron, Row} from 'reactstrap';

function App() {
  return (
    <div className="App" >
      <Container >
        <Jumbotron className="bg-info" >
          <h1 className="display-3" >Roman Convert</h1 >
        </Jumbotron >
        <Form />
        <Row className="pt-2">
          <Col>
            <h2 className="display-4">Instructions</h2>
            <p>Enter values into one or both fields to see their conversions.</p>
          </Col>
        </Row>
      </Container >
    </div >
  );
}

export default App;
