'use client';

import { useEffect } from 'react';
import { checkMode, globalState, toggleMode, type GlobalState } from '@/stores/global';
import { LaptopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useSnapshot } from 'valtio';
