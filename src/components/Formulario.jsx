import { Form } from "react-bootstrap"

const Formulario = () => {
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
      <Form.Group controlId="formPais">
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
    </Form>
  )
}

export default Formulario