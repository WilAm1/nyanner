import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import FixedHeader from "./FixedHeader";
import styled from "styled-components";
import { deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db, queryUserPosts } from "../firebase.config";
import FeedItem from "./Home/FeedItem";

const StyledCoverBanner = styled.div`
  width: 100%;
  background-color: #6bd562d6;
  height: 200px;
`;
const StyledProfileComponent = styled.div`
  .profile-img-container {
    position: relative;
    height: 100px;
    img {
      object-fit: contain;
      height: 100%;
      transform: translate(1rem, -50%);
    }
  }
`;
// TODO Lift the state of Feedlist up!
function Profile() {
  const { userDetails } = useContext(UserContext);
  const { displayName, email, photoURL, uid } = userDetails || {
    displayName: null,
    email: "guest@gmail",
    photoURL: null,
  };
  const [feed, setFeed] = useState([]);

  // // ? Will redirect to index if not signed in
  // if (userStatus !== "signed-in") return <IndexComponent />;
  useEffect(() => {
    console.log("UseEffect", uid);
    if (!uid) return;
    const query = queryUserPosts(uid);
    console.log(query);
    const unsubscribe = onSnapshot(
      query,
      (querySnapshot) => {
        const newFeed = [];
        querySnapshot.forEach((snap) => {
          const { id } = snap;
          const post = snap.data({ serverTimestamps: "estimate" });
          newFeed.push({ ...post, id });
        });
        console.log(newFeed);
        setFeed(newFeed);
      },
      { includeMetadataChanges: true }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const handleClick = async (id) => {
    await deleteDoc(doc(db, "posts", id));
  };

  return (
    <section>
      <FixedHeader title={displayName} />
      <StyledCoverBanner />
      <StyledProfileComponent>
        <div className="profile-img-container">
          <img src={photoURL} alt="user-profile-icon" />
        </div>
        <div>
          <p>{displayName}</p>
          <p>{email}</p>
        </div>
      </StyledProfileComponent>
      <ul>
        {feed.map((post) => {
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

export default Profile;
