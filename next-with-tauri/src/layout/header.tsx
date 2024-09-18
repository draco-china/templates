import Link from 'next/link';
import { VercelLogoIcon } from '@radix-ui/react-icons';
import SwitchLanguage from './switch-language';

export function LayoutHeader({ lng }: { lng: string }) {
  return (
    <header className='sticky top-0 z-40 h-auto w-full border-b pt-[calc(env(safe-area-inset-top))] backdrop-blur-md'>
      <div className='container flex h-16 items-center justify-between'>
