import axios from 'axios';
// https://sandra-back-end.herokuapp.com http://localhost:8080 https://sandra-back-render.onrender.com

const instance = axios.create({
  // baseURL: 'https://sandra-back-render.onrender.com/',
  baseURL: 'https://sandra-base.herokuapp.com/',
  // baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

const tgSandra = axios.create({
  // 163995726 - sandra
  // 525427019 - alexnumo
  baseURL: 'https://api.telegram.org/bot6096389512:AAGJpKndAcXG8jCZ1bqSXpEVNJSrcHkwv3I/sendMessage?chat_id=163995726&text=',
  // baseURL: 'https://api.telegram.org/bot6096389512:AAGJpKndAcXG8jCZ1bqSXpEVNJSrcHkwv3I/sendMessage?chat_id=525427019&text=',
  headers: {
    'Content-Type': 'application/json',
  },
});

export {
  instance,
  tgSandra
};
