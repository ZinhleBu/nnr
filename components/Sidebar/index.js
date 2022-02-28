import React, { useEffect, useState} from 'react'
import styles from '../../styles/Home.module.scss'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { getEvents, getPosts } from '../../utils/wordpress';

import Post from '../../components/Post';
import Event from '../../components/Event';

export default function Sidebar({ posts, events }) {
  
  const jsxPosts = posts.map((post) => {
    const featuredMedia = post['_embedded']['wp:featuredmedia'][0];
    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
    
  });
 
  const jsxEvents = events.map((event) => {
    const featuredMedia = event['_embedded']['wp:featuredmedia'][0];
    return <Event event={event} featuredMedia={featuredMedia} key={event.id} />;
  });
  

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarSection}>
        <h2 className={styles.sidebarTitle}>Latest News</h2>
        <div className={styles.sidebarCard}>

          <p>{jsxPosts}</p>
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


export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const events = await getEvents();
  const media = await getMedia();

  return {
    props: {
      posts,
      events,
    },
    revalidate: 10, // In seconds
  };
}