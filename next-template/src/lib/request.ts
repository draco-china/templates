import { getTranslation } from '@/i18n';
import axios, { type InternalAxiosRequestConfig } from 'axios';
import i18next from 'i18next';
import { toast } from 'sonner';
import { API_URL, SITE_URL } from './constants';
import { getCookie } from './cookies';

