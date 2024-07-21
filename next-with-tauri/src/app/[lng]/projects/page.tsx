'use client';

import Link from 'next/link';
import { Share1Icon, StarIcon } from '@radix-ui/react-icons';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@/lib/request';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Projects() {
  const { data } = useSuspenseQuery({
    queryKey: ['draco-china'],
    queryFn: async () => {
      try {
        const res = await request(
          `https://api.github.com/users/draco-china/repos?type=&sort=&direction=&per_page=&page=`,
        );
        return res.data || [];
