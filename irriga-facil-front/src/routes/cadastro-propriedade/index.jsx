import FormField from "../../components/form/field";
import FormLabel from "../../components/form/label";
import FormInput from "../../components/form/input";
import FormButton from "../../components/form/button";
import Form from "../../components/form";
import FormSelect from "../../components/form/select";
import { useState } from "react";
import { ApiRequest } from "../../utils/api";
import Loading from "../../components/common/loading";
import styles from "./index.module.css";

export default function CadastroPropriedadeRoute() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    ApiRequest("cadastro-propriedade", "POST", {
      nome: "",
      tipoSolo: "",
      principalCultivo: "",
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <h2 className={styles.cadastroHeader}>Cadastro de Propriedade</h2>
      <div className={styles.page}>
        <Form onSubmit={onSubmit}>
          <FormField>
            <FormLabel>Nome</FormLabel>
            <FormInput placeholder="Nome" />
          </FormField>
          <FormField>
            <FormLabel>Tipo de Solo</FormLabel>
            <div className={styles.select}>
              <FormSelect>
                <option className={styles.option}>Úmido</option>
                <option className={styles.option}>Seco</option>
              </FormSelect>
            </div>
          </FormField>

          <FormField>
            <FormLabel>Principal Cultivo</FormLabel>
            <div className={styles.select}>
              <FormSelect>
                <option className={styles.option}>Soja</option>
                <option className={styles.option}>Milho</option>
                <option className={styles.option}>Arroz</option>
              </FormSelect>
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
