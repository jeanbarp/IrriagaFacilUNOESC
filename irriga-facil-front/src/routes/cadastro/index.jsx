import FormField from "../../components/form/field";
import FormLabel from "../../components/form/label";
import FormInput from "../../components/form/input";
import FormButton from "../../components/form/button";
import Form from "../../components/form";
import Loading from "../../components/common/loading";
import { useState } from "react";
import { ApiRequest } from "../../utils/api";
import styles from "./index.module.css";

export default function CadastroRoute() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    ApiRequest("cadastrar", "POST", {
      email: "",
      usuario: "",
      senha: "",
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <h2 className={styles.login}>Cadastro</h2>
      <div className={styles.page}>
        <Form onSubmit={onSubmit}>
          <FormField>
            <div className={styles.usuario}>
              <FormLabel>Email</FormLabel>
            </div>
            <div className={styles.input}>
              <FormInput placeholder="Email" />
            </div>
          </FormField>
          <FormField>
            <div className={styles.usuario}>
              <FormLabel>Usuário</FormLabel>
            </div>
            <div className={styles.input}>
              <FormInput placeholder="Usuário" />
            </div>
          </FormField>
          <FormField>
            <div className={styles.usuario}>
              <FormLabel>Senha</FormLabel>
            </div>
            <div className={styles.input}>
              <FormInput placeholder="Senha" type="password" />
            </div>
          </FormField>

          {loading ? (
            <Loading />
          ) : (
            <div className={styles.cadastrar}>
              <FormButton type="submit">Cadastrar</FormButton>
            </div>
          )}
        </Form>
      </div>
    </>
  );
}
