import React, { useEffect, useState } from "react";
import AppwriteService from "../appwrite/service";
import Container from "../component/container/Container";
import { Button, PostCard } from "../component";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
function Post() {
  const [post, setPost] = useState([]);

  const slug = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      AppwriteService.getPost(slug).then((postitem) => {
        if (postitem) {
          setPost(postitem);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    console.log("deleting...");
    AppwriteService.deletePost(slug).then((status) => {
      if (status) {
        console.log(status);
        AppwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 max-w-4xl mx-auto">
      <Container>
        <div className="">
          <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
            <img
              src={AppwriteService.previewFile(post.featuredImage)}
              height="500px"
              width="400px"
              alt={post.title}
              className="rounded-xl"
            />

            {isAuthor && (
              <div className="absolute right-6 top-6">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-500" className="mr-3 ">
                    Edit
                  </Button>
                </Link>
                <Link to={`/all-posts`}>
                  <Button bgColor="bg-red-500" onClick={deletePost}>
                    Delete
                  </Button>
                </Link>
              </div>
            )}
          </div>
          <div className="w-full mb-6">
            <h1 className="text-2xl font-bold">{post.title}</h1>
          </div>
          <div className="browser-css font-medium">
            {parse(String(post.content))}
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
