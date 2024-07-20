import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='container grid gap-6 py-6 lg:grid-cols-3'>
      {[...new Array(9).fill('')].map((item, index) => {
        return (
          <Skeleton key={index} className='rounded-xl *:p-6'>
