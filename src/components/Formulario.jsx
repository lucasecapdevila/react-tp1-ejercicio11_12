import { useEffect } from "react"
import { Button, Form } from "react-bootstrap"

const Formulario = () => {
  useEffect(() => {  
    consultarAPI()
  }, [])

  const consultarAPI = async() => {
    try {
      const respuesta = await fetch('https://newsdata.io/api/1/news?apikey=pub_39181df8f313285099388f00a02da90ef9161')
      const news = await respuesta.json()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form>
      <Form.Group controlId="formCategoria" className="mb-3">
        <Form.Label>Buscar por categoría</Form.Label>
        <Form.Control as='select'>
          <option value=''>Elija una opción</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </Form.Control>
        <Form.Text className="text-danger">Mensaje de error</Form.Text>
      </Form.Group>
      <Form.Group controlId="formPais" className="mb-3">
        <Form.Label>Buscar por país</Form.Label>
        <Form.Control as='select'>
          <option value=''>Elija una opción</option>
          <option value='A'>A</option>
          <option value='B'>B</option>
          <option value='C'>C</option>
          <option value='D'>D</option>
          <option value='E'>E</option>
        </Form.Control>
        <Form.Text className="text-danger">Mensaje de error</Form.Text>
      </Form.Group>

      <Button type="submit">Buscar</Button>
    </Form>
  )
}

export default Formulario