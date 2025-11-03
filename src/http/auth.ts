import type { Credentials } from '../types';
import { api } from './client';

export const login = (payload: Credentials) => api.post('/auth/login', payload);
export const self = () => api.get('/auth/self');
