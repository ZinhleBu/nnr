import React from 'react'
import styles from '../../styles/Home.module.scss'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { getEvents, getPosts } from '../../utils/wordpress';

import Post from '../../components/Post';
import Event from '../../components/Event';

export default function Sidebar({ posts, events }) {
  
  // const jsPosts = posts.map((post) => {
  //   const featuredMedia = post['_embedded']['wp:featuredmedia'][0];
  //   return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
    
  // });
 
  // const jsEvents = events.map((event) => {
  //   const featuredMedia = event['_embedded']['wp:featuredmedia'][0];
  //   return <Event event={event} featuredMedia={featuredMedia} key={event.id} />;
  // });
  

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarSection}>
        <h2 className={styles.sidebarTitle}>Latest News</h2>
        <div className={styles.sidebarCard}>

          {/* <p>{jsPosts}</p> */}
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

          {/* <p>{jsEvents}</p> */}
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


// export async function getStaticProps({ params }) {
//   const posts = await getPosts();
//   const events = await getEvents();
//   const media = await getMedia();

//   return {
//     props: {
//       posts,
//       events,
//       media,
//     },
//     revalidate: 10, // In seconds
//   };
// }