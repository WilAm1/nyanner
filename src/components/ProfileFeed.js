import React from "react";
import FeedItem from "./FeedItem";

function ProfileFeed({ posts, handleClick }) {
  return (
    <section>
      <ul>
        {posts.map((post) => {
          return (
            <FeedItem key={post.id} post={post}>
              <button onClick={() => handleClick(post.id)}>Delete Me!</button>
            </FeedItem>
          );
        })}
      </ul>
    </section>
  );
}

export default ProfileFeed;
