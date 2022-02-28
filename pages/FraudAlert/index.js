import React from 'react'
import Sidebar from '../../components/Sidebar'
import styles from '../../styles/Home.module.scss'

const FraudAlert = () => {
  return (
    <>
      <div className={styles.fraud_container}>
        <div className={styles.fraud_wrapper}>

          <h1>

            Fraud Hotline
          </h1>
          <h2>

            Toll free anonymous Tip-Offsy
          </h2>
          <p>

            Phone: 0800 701 701
          </p>
          <p>

            Email: tipoffs@nnr.co.za
          </p>
          <p>

            To report suspected fraud , corruption and unethical conduct please contact:
          </p>
          <p>

            Mr. F. Ndou – 012 674 7106
          </p>
          <p>

            Ms. P Masilo – 012 674 7184
          </p>
        </div>
        <Sidebar />

      </div>
    </>
  )
}

export default FraudAlert