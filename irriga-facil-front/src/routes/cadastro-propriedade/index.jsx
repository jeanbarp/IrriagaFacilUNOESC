import FormField from "../../components/form/field"
import FormLabel from "../../components/form/label"
import FormInput from "../../components/form/input"
import FormButton from "../../components/form/button"
import Form from "../../components/form"
import FormSelect from "../../components/form/select"
import { useState } from "react"
import { ApiRequest } from "../../utils/api"
import Loading from "../../components/common/loading"

export default function CadastroPropriedadeRoute() {
  const [loading, setLoading] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
    ApiRequest("cadastro-propriedade", "POST", { nome: "", tipoSolo: "", principalCultivo: "" }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <h2>Cadastro de Propriedade</h2>
      <Form onSubmit={onSubmit}>
        <FormField>
          <FormLabel>Nome</FormLabel>
          <FormInput placeholder='Nome' />
        </FormField>
        <FormField>
          <FormLabel>Tipo de Solo</FormLabel>
          <FormSelect>
            <option>Úmido</option>
            <option>Seco</option>
          </FormSelect>
        </FormField>

        <FormField>
          <FormLabel>Principal Cultivo</FormLabel>
          <FormSelect>
            <option>Soja</option>
            <option>Milho</option>
            <option>Arroz</option>
          </FormSelect>
        </FormField>

        {loading ? <Loading /> : <FormButton type='submit'>Cadastrar</FormButton>}
      </Form>
    </>
  )
}
