import { bloggerConfig } from "../config/blogger";

export const getBlogsRequest = () => {
  return fetch(`https://www.googleapis.com/blogger/v3/blogs/${bloggerConfig.blogId}?key=${bloggerConfig.apiKey}`,
    { method: 'GET',
      headers: { 'content-type': 'application/json' }
    });
};