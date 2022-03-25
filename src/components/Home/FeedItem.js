// import { toDate } from "firebase/firestore";
import React from "react";

function FeedItem({ post: feedPost, children }) {
  const { post, dateCreated } = feedPost;
  console.log(dateCreated);
  return (
    <li>
      <p>{post}</p>
      <p>{dateCreated.toDate().toDateString()}</p>
      {children}
    </li>
  );
}

export default FeedItem;
