import axios from 'axios';
import Config from '../config';

export const api = axios.create({
   baseURL: Config.VITE_AUTH_API_BASE_URL,
   withCredentials: true,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
   },
});
