import { getTranslation } from '@/i18n';
import axios, { type InternalAxiosRequestConfig } from 'axios';
import i18next from 'i18next';
import { toast } from 'sonner';
import { API_URL, SITE_URL } from './constants';
import { getCookie } from './cookies';

const request = axios.create({
  baseURL: API_URL || SITE_URL,
  // withCredentials: true,
  // timeout: 10000,
});

request.interceptors.request.use(
  async (request: InternalAxiosRequestConfig) => {
    const Authorization = getCookie('Authorization');
    if (Authorization) request.headers.Authorization = Authorization;
    return request;
  },
