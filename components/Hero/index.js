import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';


export default function Hero() {
    return (
        <div className={styles.hero}>
            
            <div className={styles.hero_wrapper}>
                <div className={styles.hero_content}>
                    <h1 className={styles.hero_title}>
                        National Nuclear Regulator
                    </h1>
                    <div className={styles.hero_buttons}>
                        <button className={styles.buttonPrimary}>
                            <Link href="/FraudAlert">
                               <a href="">Report Fraud</a>
                            </Link>
                        </button>
                        <button className={styles.buttonPrimary}>
                            <Link href="/">
                               <a href="">Report a Safety Concern</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}