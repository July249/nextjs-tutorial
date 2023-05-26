import styles from './page.module.css';

export const metadata = {
  title: 'About Page',
  description: 'This is About Page',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
