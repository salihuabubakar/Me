export interface PostDetails {
  _id: string;
  title: string;
  slug: string;
  img_url: string;
  description: [];
  introduction: string;
  code: [];
  author: {
    name: string,
    age: number,
    email: string
  };
  createdAt: string;
}

export interface PostArray {
  posts: PostDetails[];
}

export interface UseFetchPostsResult {
  data: PostDetails[] | null;
  loading: boolean;
  error: string | null;
}