import styles from "./index.module.css"

export default function FormInput({ ...props }) {
  return <input className={styles.input} {...props} />
}
