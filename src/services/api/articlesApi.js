import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'space-web-test.herokuapp.com/'
});

export const articleApi = {
  getArticles () {
    return instance.get('rss');
  }
};
