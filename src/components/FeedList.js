import React from "react";
import FeedItem from "./FeedItem";

function FeedList({ posts }) {
  return (
    <section>
      <ul>
        {posts.map((post) => {
          return <FeedItem key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}

export default FeedList;
