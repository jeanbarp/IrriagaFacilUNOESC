import { Link } from "react-router-dom";
import styles from "./index.module.css";
import FormField from "../../components/form/field";
import FormLabel from "../../components/form/label";
import FormInput from "../../components/form/input";
import FormButton from "../../components/form/button";
import Form from "../../components/form";
import Loading from "../../components/common/loading";
import { useState } from "react";
import { ApiRequest } from "../../utils/api";
import Footer from "../../components/layout/footer";

export default function LoginRoute() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    ApiRequest("login", "POST", { usuario: "", senha: "" }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <h2 className={styles.login}>Login</h2>
      <div className={styles.page}>
        <Form onSubmit={onSubmit}>
          <FormField>
            <div className={styles.usuario}>
              <FormLabel>Usuário</FormLabel>
            </div>
            <div className={styles.input}>
              <FormInput placeholder="Usuário" />
            </div>
          </FormField>
          <FormField>
            <div className={styles.senha}>
              <FormLabel>Senha</FormLabel>
            </div>
            <div className={styles.input}>
              <FormInput placeholder="Senha" type="password" />
            </div>
          </FormField>

          {loading ? (
            <Loading />
          ) : (
            <div className={styles.buttonEntrar}>
              <FormButton type="submit">Entrar</FormButton>
            </div>
          )}

          <Link to={"/cadastro"} className={styles.buttonCadastro}>
            <FormButton type="submit">Cadastre-se</FormButton>
          </Link>
        </Form>
      </div>
    </>
  );
}
