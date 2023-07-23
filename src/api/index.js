import axios from 'axios';

const { VITE_API_SERVER } = import.meta.env;

const request = (token) =>
  axios.create({
    baseURL: VITE_API_SERVER,
    headers: { Authorization: token ? `Bearer ${token}` : '' },
  });

export default request;
