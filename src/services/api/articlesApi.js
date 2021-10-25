import axios from 'axios';

// const instance = axios.create({
//   withCredentials: false,
//   baseURL: 'https://space-web-test.herokuapp.com'
//   // baseURL: 'https://localhost:3001/'
//   // react-scripts start
// });

export const articleApi = {
  getArticles () {
    return axios.get('https://space-web-test.herokuapp.com/rss');
  }
};
