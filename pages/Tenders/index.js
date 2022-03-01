import React from 'react'
import TabsTenders from '../../components/TabsTenders';
import Sidebar from '../../components/Sidebar';
import styles from "../../styles/Home.module.scss";


const Tenders = () => {
  
  return (
    <div className={styles.pageWrapper} >
        <div className="container_tabs">
        <TabsTenders/>
        <Sidebar />
        </div>
  </div>
  )
}

export default Tenders