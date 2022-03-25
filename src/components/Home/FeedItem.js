// import { toDate } from "firebase/firestore";
import React from "react";

function FeedItem({ post: feedPost }) {
  const { post, dateCreated } = feedPost;
  console.log(dateCreated);
  return (
    <li>
      <p>{post}</p>
      <p>{dateCreated.toDate().getDay()}</p>
    </li>
  );
}

export default FeedItem;
