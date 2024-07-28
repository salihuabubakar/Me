import { useState, useEffect } from 'react';
import { PostDetails, UseFetchPostsResult } from '../types/post';

export const useFetchPosts = (): UseFetchPostsResult => {
  const [data, setData] = useState<PostDetails[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const baseUrl = process.env.VERCEL_ENV === 'production' ? 'https://salihuk.vercel.app' : 'http://localhost:3000'

  useEffect(() => {
    const fetchData = async () => {
      const url = `${baseUrl}/api/posts`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json: PostDetails[] = await response.json();
        setData(json);
        localStorage.setItem('posts', JSON.stringify(json));
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // const storedPosts = localStorage.getItem('posts');
    // if (storedPosts) {
    //   setData(JSON.parse(storedPosts));
    //   setLoading(false);
    // } else {
    //   fetchData();
    // }
  }, [baseUrl]);

  return { data, loading, error };
};
