export interface IPost {
  id: string;
  title: string;
  content: string;
  avatar: string;
  user: string;
}
export interface IPosts {
  posts: IPost[];
}
export interface postFuncProps {
  deletePost(id: string): void;
}
export interface postProps {
  post: IPost;
  deletePost(id: string): void;
}
