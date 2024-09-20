'use client';

import { languages, useLanguage, useTranslation } from '@/i18n';
import { getCountry } from '@/lib/countries';
import useMounted from '@/hooks/useMounted';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import Icon from '@/components/icon';

export default function SwitchLanguage() {
  const mounted = useMounted();
  const { lng, changeLanguage } = useLanguage();
  const { t } = useTranslation(lng, 'language');
