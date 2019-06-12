import { bloggerConfig } from "../config";

export const getBlogsRequest = () => {
  const { blogId, apiKey } = bloggerConfig;
  const method = "GET";
  const headers = { "content-type": "application/json" };
  return fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${blogId}?key=${apiKey}`,
    { method, headers }
  );
};

export const getBlogPostsRequest = () => {
  const { blogId, apiKey } = bloggerConfig;
  const method = "GET";
  const headers = { "content-type": "application/json" };
  return fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`,
    {
      method,
      headers
    }
  );
};

/**
 * @param {string} endpoint
 * @param {{}} bodyParams
 */
export const postRequest = (endpoint, bodyParams, headers) => {
  return fetch(endpoint, {
    method: "POST",
    headers: headers
      ? headers
      : {
          "content-type": "application/json"
        },
    body: JSON.stringify(bodyParams)
  });
};
