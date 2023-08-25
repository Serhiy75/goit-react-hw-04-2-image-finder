import axios from 'axios';

const API_KEY = '37549280-c708feca670f76edfee67d8a3';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: API_KEY,
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getImages = async (q, page = 1) => {
  const { data } = await instance.get(`?q=${q}&page=${page}`);

  return data;
};
