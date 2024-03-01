import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import BarraNavegacion from './components/common/BarraNavegacion';
import Footer from './components/common/Footer';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import { Col, Row } from 'react-bootstrap';

function App() {
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
            <Formulario />
          </Col>
        </Row>
      </main>
      <Footer />
    </>
  )
}

export default App
