import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from '../../styles/Home.module.scss'

const Layout = ({ children }) => {
  return (
      <>
      <Header/>
      <div className={styles.main}>{children}</div>
      <Footer/>
      </>
  )
}

export default Layout