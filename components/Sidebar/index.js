import React from 'react'
import styles from '../../styles/Home.module.scss'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function Sidebar() {

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarSection}>
        <h2 className={styles.sidebarTitle}>Latest News</h2>
        <div className={styles.sidebarCard}>

          <p>New NNR logo announcement</p>
          <p>New NNR logo announcement</p>
          <p>New NNR logo announcement</p>
          <p>New NNR logo announcement</p>
          <p>New NNR logo announcement</p>

        </div>
      </div>
      <div className={styles.sidebarSection}>
        <h2 className={styles.sidebarTitle}>Topics in Focus</h2>
        <div className={styles.sidebarCard}>

          <p>New NNR logo announcement</p>
          <p>New NNR logo announcement</p>
          <p>New NNR logo announcement</p>
          <p>New NNR logo announcement</p>
          <p>New NNR logo announcement</p>

        </div>
      </div>
      <div className={styles.sidebarSection}>
        <h2 className={styles.sidebarTitle}>Tweets by @NucRegSA</h2>
        <div className="centerContent">
          <div className="selfCenter spaceBetween">
            <TwitterTimelineEmbed
              onLoad={function noRefCheck() { }}
              options={{
                height: 400
              }}
              sourceType="profile"
              userId={1934309676}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

