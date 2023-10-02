import styles from "./index.module.css"

export default function FormField({ children, ...props }) {
  return (
    <div className={styles.field} {...props}>
      {children}
    </div>
  )
}
