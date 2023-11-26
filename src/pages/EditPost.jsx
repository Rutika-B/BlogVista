import React, { useEffect, useState } from "react";
import AppwriteService from "../appwrite/service";
import { PostForm } from "../component";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../component/container/Container";

function EditPost() {
  const [post, setPost] = useState(null);
  const slug = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      AppwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return (
    post && (
      <div className="py-8">
        <Container>
          <PostForm post={post} />
        </Container>
      </div>
    )
  );
}

export default EditPost;
