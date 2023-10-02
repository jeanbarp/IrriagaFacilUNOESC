import { Link } from "react-router-dom"
import styles from "./index.module.css"
import FormField from "../../components/form/field"
import FormLabel from "../../components/form/label"
import FormInput from "../../components/form/input"
import FormButton from "../../components/form/button"
import Form from "../../components/form"
import Loading from "../../components/common/loading"
import { useState } from "react"
import { ApiRequest } from "../../utils/api"

export default function CadastroRoute() {
  const [loading, setLoading] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
    ApiRequest("cadastrar", "POST", { email: "", usuario: "", senha: "" }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <h2>Cadastro</h2>
      <Form onSubmit={onSubmit}>
        <FormField>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder='Email' />
        </FormField>
        <FormField>
          <FormLabel>Usuário</FormLabel>
          <FormInput placeholder='Usuário' />
        </FormField>
        <FormField>
          <FormLabel>Senha</FormLabel>
          <FormInput placeholder='Senha' type='password' />
        </FormField>

        {loading ? <Loading /> : <FormButton type='submit'>Cadastrar</FormButton>}
      </Form>
    </>
  )
}
