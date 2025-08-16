'use client';

import { formatMode, globalState } from '@/stores/global';
import { GlobalScrollbar } from 'mac-scrollbar';
import { useSnapshot } from 'valtio';
import 'mac-scrollbar/dist/mac-scrollbar.css';

export default function LayoutScroll() {
