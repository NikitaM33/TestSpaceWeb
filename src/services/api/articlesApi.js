import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'https://space-web-test.herokuapp.com/'
  // react-scripts start
});

export const articleApi = {
  getArticles () {
    return instance.get('rss');
  }
};
