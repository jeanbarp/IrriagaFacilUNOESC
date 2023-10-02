import styles from "./index.module.css"

export default function FormLabel({ children, ...props }) {
  return (
    <label {...props} className={styles.label}>
      {children}
    </label>
  )
}
