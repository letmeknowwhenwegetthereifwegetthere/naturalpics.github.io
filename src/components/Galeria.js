import Heart from "./Heart";
import {  useContext,} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/galeria.css'
import Context from "../Context";

const Galeria = () => {
  const {fotos, setFotos} = useContext(Context)

  const favoritasClick = (id) =>{
    const fotosID = fotos.findIndex((fotos) => fotos.id === id);
    fotos[fotosID].liked = !fotos[fotosID].liked;
    setFotos ([...fotos]);
    console.log("click en"+id)
  }
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={4} className="g-3">
        {fotos.map((foto) => (
          <Col className='mb3-' key={foto.id}>
            <Card className="bg-dark text-white my-card">
              <Card.Img src={foto.src.large} alt="Card image" />
              <Card.ImgOverlay >
              <Row >

                <Col sm={8}><Card.Title>{foto.alt}</Card.Title></Col>
                <Col sm={4} className="text-end" ><Heart filled={(foto.liked)} favoritasClick={(favoritasClick)} id={(foto.id)}  /></Col>
              </Row>
              </Card.ImgOverlay>
              
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Galeria