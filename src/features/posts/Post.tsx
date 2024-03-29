import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { postProps } from "../../store/models/postinterface";

export const Post = ({ post, deletePost }: postProps) => {
  return (
    <Card style={{ marginTop: 5 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid xs={11}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={post.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={post.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {post.user} -&nbsp;
                    </Typography>
                    {post.content}
                  </React.Fragment>
                }
              />
            </ListItem>
          </Grid>
          <Grid xs={1}>
            <DeleteOutlineOutlinedIcon
              style={{ marginTop: 15 }}
              fontSize="large"
              onClick={() => deletePost(post.id)}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
