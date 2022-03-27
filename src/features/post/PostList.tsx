import { useEffect } from "react";
import { useStoreDispatch, useStoreState } from "../../app/hooks";

const PostList = () => {
  const dispatch = useStoreDispatch();
  const posts = useStoreState((state) => state.posts.items);
  useEffect(() => {
    dispatch.posts.getPosts();
  }, [dispatch]);
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
