import styles from "./index.module.css";

export default function PropreiedadesRoute() {
  const propriedades = [
    {
      nome: "Recanto Feliz",
      descricao: "3 cultivos",
    },
    {
      nome: "Fazenda SMO",
      descricao: "6 cultivos",
    },
  ];
  return (
    <>
      <h2 className={styles.cultivosTitle}>Cultivos</h2>
      <div className={styles.page}>
        <div className={styles.cardsContainer}>
          {propriedades.map((propriedade, index) => {
            return (
              <button className={styles.propriedadeCard} key={index}>
                <div className={styles.title}>{propriedade.nome}</div>
                <div className={styles.description}>
                  {propriedade.descricao}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
