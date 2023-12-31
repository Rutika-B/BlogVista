import React, { useEffect, useState } from "react";
import AppwriteService from "../appwrite/service";
import Container from "../component/container/Container";
import { PostCard } from "../component";
import { ThemeProvider } from "../context/theme";
import ThemeBtn from "../component/ThemeBtn";
import { useSelector } from "react-redux";
import Loader from "../component/Loader";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  AppwriteService.getPosts([]).then((postItem) => {
    if (postItem) {
      setPosts(postItem.documents);
    }
  });
  if (posts.length === 0 ) {
    return (
      <>
      
        <Loader />
      </>
    );
  }
  return (
    <div className={`w-full py-2`}>
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="w-1/4 p-2">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
