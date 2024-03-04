import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import BarraNavegacion from './components/common/BarraNavegacion';
import Footer from './components/common/Footer';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import { Col, Row } from 'react-bootstrap';
import ListaNoticias from './components/ListaNoticias';
import { useState } from 'react';

function App() {
  const [news, setNews] = useState([])

  return (
    <>
      <BarraNavegacion />
      <main className='container my-4 mainPage'>
        <Row>
          <Col md={12}>
            <Titulo />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Formulario setNews={setNews} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ListaNoticias news={news} />
          </Col>
        </Row>
      </main>
      <Footer />
    </>
  )
}

export default App
