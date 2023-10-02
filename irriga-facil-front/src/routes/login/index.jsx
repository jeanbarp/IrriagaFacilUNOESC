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

export default function LoginRoute() {
  const [loading, setLoading] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
    ApiRequest("login", "POST", { usuario: "", senha: "" }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={onSubmit}>
        <FormField>
          <FormLabel>Usuário</FormLabel>
          <FormInput placeholder='Usuário' />
        </FormField>
        <FormField>
          <FormLabel>Senha</FormLabel>
          <FormInput placeholder='Senha' type='password' />
        </FormField>

        {loading ? <Loading /> : <FormButton type='submit'>Entrar</FormButton>}

        <Link to={"cadastrar"} className={styles.button}>
          Cadastre-se
        </Link>
      </Form>
    </>
  )
}
