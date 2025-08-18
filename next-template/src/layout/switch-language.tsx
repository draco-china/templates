'use client';

import { languages, useLanguage, useTranslation } from '@/i18n';
import { getCountry } from '@/lib/countries';
import useMounted from '@/hooks/useMounted';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
