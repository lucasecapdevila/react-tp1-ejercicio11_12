import { Col, Row } from "react-bootstrap"
import Noticia from "./Noticia"

const ListaNoticias = () => {
  return (
    <Row className="my-4">
      <Col sm={6} md={4} lg={3}>
        <Noticia />
      </Col>
      <Col sm={6} md={4} lg={3}>
        <Noticia />
      </Col>
      <Col sm={6} md={4} lg={3}>
        <Noticia />
      </Col>
      <Col sm={6} md={4} lg={3}>
        <Noticia />
      </Col>
    </Row>
  )
}

export default ListaNoticias