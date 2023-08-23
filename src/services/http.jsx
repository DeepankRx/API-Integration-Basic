import axios from 'axios';
const BASE_URL = 'http://103.176.56.141:3333/api';
const http = axios.create({
  baseURL: BASE_URL,
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response.status === 401) {
    //     // do something
    // }
    return Promise.reject(error);
  }
);

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const token_id = localStorage.getItem('token_id');
  if (token) {
    config.headers.Token_Data = token;
    config.headers.Token_ID = token_id;
  }
  return config;
});

export default http;
