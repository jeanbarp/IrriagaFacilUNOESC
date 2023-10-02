import styles from "./index.module.css"

export default function Footer() {
  return <footer className={styles.footer}>© {new Date().getFullYear()} Todos os direitos reservados. Desenvolvido por PPJ.</footer>
}
