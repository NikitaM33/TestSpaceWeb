import { articleApi } from '../../services/api/articlesApi';
import axios from 'axios';

export const setArticles = (payload) => ({
  type: 'SET_ARTICLES',
  payload
});

export const fetchArticles = () => async (dispatch) => {
  try {
    // axios.get('http://localhost:3000/db.json')
    //   .then((response) => {
    //     dispatch(setArticles(response.data));
    //   })

    const response = await articleApi.getArticles();
    dispatch(setArticles(response.data));
  } catch(err) {
    throw new Error(err)
  }
};
