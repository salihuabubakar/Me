export interface PostDetails {
  id: string;
  title: string;
  slug: string;
  description: string;
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