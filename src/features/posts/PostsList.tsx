import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import { IPost, IPosts } from "../../store/models/postinterface";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { onDeletePost } from "../../store/posts/postsSlice";
import { Post } from "./Post";

export const PostsList = () => {
  const dispatch = useAppDispatch();

  const posts: IPosts = useAppSelector((state) => state.posts);

  const deletePost = (id: string) => {
    console.log(id);
    dispatch(onDeletePost(id));
  };

  const renderedPosts = posts.posts.map((post: IPost) => (
    <Post key={post.id} post={post} deletePost={deletePost} />
  ));
  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h2">All Posts</Typography>
        <Link to="/create">
          <Button variant="outlined">Add Post</Button>
        </Link>
        <List
          sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}
        >
          {renderedPosts}
        </List>
      </Box>
    </Container>
  );
};
