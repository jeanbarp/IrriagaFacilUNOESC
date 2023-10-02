import styles from "./index.module.css"

export default function FormButton({ children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}
