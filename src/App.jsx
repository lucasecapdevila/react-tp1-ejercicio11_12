import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import BarraNavegacion from './components/common/BarraNavegacion';
import Footer from './components/common/Footer';
import Titulo from './components/Titulo';

function App() {
  return (
    <>
      <BarraNavegacion />
      <main className='container my-4 mainPage'>
        <Titulo />
      </main>
      <Footer />
    </>
  )
}

export default App
