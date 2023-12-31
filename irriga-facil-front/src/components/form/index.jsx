import styles from "./index.module.css"

export default function Form({ children, ...props }) {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  )
}
