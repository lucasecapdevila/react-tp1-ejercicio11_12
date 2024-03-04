import { Button, Form } from "react-bootstrap"
import {paises} from '../../data'
import {categorias} from '../../data'
import { useForm } from "react-hook-form"

const Formulario = ({setNews}) => {
  const apiKey = '39181df8f313285099388f00a02da90ef9161'

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async({pais, categoria}) => {
    try {
      const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=pub_${apiKey}&country=${pais}&category=${categoria}`)
      const data = await respuesta.json()
      setNews(data.results)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formCategoria" className="mb-3">
        <Form.Label>Buscar por categoría</Form.Label>
        <Form.Control as='select'
          {
            ...register("categoria",{
              required: 'La categoría de las noticias es obligatoria.'
            })
          }
        >
          <option value=''>Elija una categoría</option>
          {categorias.map((categoria) => (
            <option key={categoria.value} value={categoria.value}>
              {categoria.label}
            </option>
          ))}
        </Form.Control>
        <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
      </Form.Group>
      <Form.Group controlId="formPais" className="mb-3">
        <Form.Label>Buscar por país</Form.Label>
        <Form.Control as='select'
          {
            ...register("pais",{
              required: 'El país de las noticias es obligatorio.'
            })
          }
        >
          <option value=''>Elija un país</option>
          {paises.map((pais) => (
            <option key={pais.value} value={pais.value}>
              {pais.label}
            </option>
          ))}
        </Form.Control>
        <Form.Text className="text-danger">{errors.pais?.message}</Form.Text>
      </Form.Group>

      <Button type="submit" variant="success">Buscar</Button>
    </Form>
  )
}

export default Formulario