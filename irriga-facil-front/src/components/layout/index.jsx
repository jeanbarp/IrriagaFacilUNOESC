import styles from "./index.module.css"

import Footer from "./footer"
import Nav from "./nav"

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.page}>{children}</div>
      <Footer />
    </>
  )
}
