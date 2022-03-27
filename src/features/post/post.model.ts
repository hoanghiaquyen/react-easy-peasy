import { action, Action, thunk, Thunk } from "easy-peasy";
import { Post } from "./post.interface";

interface PostState {
  items: Post[];
  error: null;
}

interface PostAction {
  setPosts: Action<this, Post[]>;
  setError: Action<this, string>;
}

interface PostThunk {
  getPosts: Thunk<this, void>;
}

export interface PostModel extends PostState, PostAction, PostThunk {}

export const postModel: PostModel = {
  items: [],
  error: null,
  setPosts: action((state: any, payload: Post[]) => {
    state.items = payload;
  }),
  setError: action((state: any, payload: string) => {
    state.error = payload;
  }),
  getPosts: thunk(async (actions, _) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      actions.setPosts(posts);
    } catch (error: any) {
      console.log(error);
      actions.setPosts([]);
      actions.setError(error.message);
    }
  }),
};
