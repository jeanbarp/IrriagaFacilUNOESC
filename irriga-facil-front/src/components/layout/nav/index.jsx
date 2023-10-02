import { Link } from "react-router-dom"
import styles from "./index.module.css"

export default function Nav() {

  return (
    <nav className={styles.nav}>
      <Link to={"login"} className={styles.button}>Login</Link>
      <Link to={"cadastro"} className={styles.button}>Cadastro</Link>
      <Link to={"propriedades"} className={styles.button}>Propriedades</Link>
      <Link to={"cadastro-propriedade"} className={styles.button}>Cadastro Propriedade</Link>
    </nav>
  )
}
