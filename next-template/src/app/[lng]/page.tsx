import Image from 'next/image';
import Link from 'next/link';
import { getTranslation } from '@/i18n';
import { Button } from '@/components/ui/button';

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await getTranslation(lng, 'index');
