import { Fragment } from 'react';
import Link from 'next/link';
import {
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import {
  DISCORD_LINK,
  EMAIL,
  GITHUB_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  TWITTER_LINK,
} from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import { SwitchMode } from './switch-mode';

const Links = [
  {
    icon: <EnvelopeClosedIcon className='size-4' />,
