'use client';

import { useEffect } from 'react';
import { checkMode, globalState, toggleMode, type GlobalState } from '@/stores/global';
import { LaptopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useSnapshot } from 'valtio';
import useMounted from '@/hooks/useMounted';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function SwitchMode() {
  const mounted = useMounted();
  const { mode } = useSnapshot(globalState);

  useEffect(() => {
