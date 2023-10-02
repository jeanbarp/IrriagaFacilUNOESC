import styles from "./index.module.css"

export default function FormSelect({ children, ...props }) {
  return (
    <select className={styles.select} {...props}>
      {children}
    </select>
  )
}
