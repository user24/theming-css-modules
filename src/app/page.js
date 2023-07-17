'use client';

import classNames from './page.module.css';
import { useTheme } from 'next-themes';
import applyTheme from '@/utils/applyTheme';

export default function Home() {
  const {theme, setTheme} = useTheme();
  const classes = applyTheme(theme, classNames);
  return (
    <main className={classes.main}>
      <div className={classes.description}>
        I am themed now.
        <button onClick={() => setTheme('dank')}>Dank Theme</button>
        <button onClick={() => setTheme(' ')}>Default Theme</button>
      </div>
    </main>
  )
}
