import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'space-web-test.herokuapp.com' || 'http://localhost:3001'
});

export const articleApi = {
  getArticles () {
    return instance.get('/rss');
  }
};
