import React from "react";

function FeedList({ posts }) {
  // TODO get the user profile from db query here
  return (
    <section>
      <ul>
        {posts.map((post) => {
          const { text, from, date } = post;
          return (
            <li>
              <p>{from}</p>
              <p>{text}</p>
              <span>{date}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FeedList;
