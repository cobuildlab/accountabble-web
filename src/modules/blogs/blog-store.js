import Flux from 'flux-state';

export const GET_BLOGS = 'GET_BLOGS';
export const ERROR_BLOGS = 'ERROR_BLOGS';

class BlogStore extends Flux.DashStore {
  constructor() {
    super();
    this.addEvent(GET_BLOGS);
    this.addEvent(ERROR_BLOGS);
  }
};

const blogStore = new BlogStore();

export default blogStore;