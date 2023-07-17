'use client';

import classes from './page.module.css';
import { useTheme } from 'next-themes';

export default function Home() {
  const {theme, setTheme} = useTheme();
  return (
    <main className={classes.main}>
      <div className={classes.description}>
        I am not themed yet.
        <button onClick={() => setTheme('dank')}>Dank Theme</button>
        <button onClick={() => setTheme(' ')}>Default Theme</button>
      </div>
    </main>
  )
}
