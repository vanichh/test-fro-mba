import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Специализированные дисциплины</h1>
    </header>
  );
};
