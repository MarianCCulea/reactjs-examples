import { useSelector, useDispatch } from "react-redux";
import { Post } from "../components";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
} from "../redux/reducers/postsSlice";
import { useEffect } from "react";
const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    content = posts.map((post) => <Post key={post.id} postId={post.id} />);
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
