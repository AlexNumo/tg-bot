import axios from 'axios';
// https://sandra-back-end.herokuapp.com http://localhost:8080 https://sandra-back-render.onrender.com

const instance = axios.create({
  baseURL: 'https://sandra-back-render.onrender.com/',
  // baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
