import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  // baseURL: 'http://localhost:3001/'
  baseURL: process.env.PORT || 'http://localhost:3001/'
});

export const articleApi = {
  getArticles () {
    return instance.get('rss');
  }
};
