import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import"./App.css"

function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col>
        <img className="image" src="https://t3.ftcdn.net/jpg/00/85/32/68/360_F_85326806_k3nKFfDnL7BKZZpgplibILjssleez7za.jpg" alt="" />
        </Col>
        
      </Row>
    </Container>
  );
}

export default ContainerExample;