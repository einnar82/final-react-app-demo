import { fetchPosts } from "../services/posts.service";
import photoActions from "./photos";
const getActions = setState => ({
  getAllPost: () => {
    fetchPosts().then(data => {
      setState(state => ({
        ...state,
        posts: [...data]
      }));
    });
  },
  ...photoActions(setState)
});

export default getActions;
