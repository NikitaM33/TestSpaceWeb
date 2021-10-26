import { articleApi } from '../../services/api/articlesApi';
import axios from 'axios';

export const setArticles = (payload) => ({
  type: 'SET_ARTICLES',
  payload
});

export const fetchArticles = () => async (dispatch) => {
  try {
    const response = await axios.get('/rss');
    // const response = await articleApi.getArticles();
    dispatch(setArticles(response.data));
  } catch(err) {
    console.log(err)
  }
};
