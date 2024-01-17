import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { IPosts, IPost } from "../models/postinterface";

const initialState: IPosts = {
  posts: [
    {
      id: nanoid(),
      title: "About Typescript",
      content: "Typescript is extended javascript with type",
      avatar: "./avatar/avatar3.png",
      user: "Dolly",
    },
    {
      id: nanoid(),
      title: "React is still in king state of web",
      content:
        "React is open-source javascript framework for single page applications",
      avatar: "./avatar/avatar3.png",
      user: "Tom",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    onAddPost(state, action: PayloadAction<IPost>) {
      state.posts.push(action.payload);
    },
    onDeletePost(state, action: PayloadAction<string>) {
      return {
        posts: [
          ...state.posts.filter((item: IPost) => item.id !== action.payload),
        ],
      };
    },
  },
});

export const { onAddPost, onDeletePost } = postsSlice.actions;

export default postsSlice.reducer;
