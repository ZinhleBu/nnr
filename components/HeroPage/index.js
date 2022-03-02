import React from 'react';
import styles from '../../styles/Home.module.scss';


export default function HeroPage() {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_page_wrapper}>
                <div className={styles.hero_content}>
                    <h1 className={styles.hero_title_page}>
                        <h1>Emergency Planning</h1>
                        </h1>
                    <div className={styles.hero_description}>
                    </div>
                </div>
            </div>
        </div>
    )
}