import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  mode: 'jit',
  darkMode: ['class', "[data-mode='dark']"],
  content: ['./src/**/*.{ts,tsx}'],
