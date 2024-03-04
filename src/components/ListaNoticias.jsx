import { Col, Row } from "react-bootstrap"
import Noticia from "./Noticia"

const ListaNoticias = ({news}) => {
  return (
    <Row className="my-4">
      {
        news.map((result, index) => <Noticia key={index} result={result} />)
      }
    </Row>
  )
}

export default ListaNoticias