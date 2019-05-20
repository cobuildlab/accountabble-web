import Flux from 'flux-state';
import * as http from '../../utils/fetch';
import { ERROR_BLOGS, GET_BLOGS } from './blog-store';


export const getBlogsAction = async () => {
  let response;
  try {
    response = await http.getBlogsRequest();
  } catch (err) {
    return Flux.dispatchEvent(ERROR_BLOGS, new Error(err.message));
  };
  const blogs = response.json();
  return Flux.dispatchEvent(GET_BLOGS, blogs);
};

