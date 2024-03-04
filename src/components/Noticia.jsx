import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Noticia = ({result}) => {
  return (
    <Col sm={6} md={4} lg={3} className='mb-4'>
      <Card className='h-100'>
        <Card.Img variant='top' src={result.image_url} alt={result.title} className='img-fluid imgNoticia' />
        <Card.Body>
          <Card.Title>{result.title}</Card.Title>
          <Card.Text>{result.description}</Card.Text>
        </Card.Body>
        <Card.Footer className='d-flex'>
          <a href={result.link} target='_blank' className='btn btn-primary ms-auto'>Ver más</a>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default Noticia