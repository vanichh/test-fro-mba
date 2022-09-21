import styles from './list-cart.module.scss';
import cn from 'classnames';

export const ListCart = () => {
  return (
    <article className={styles.list}>
      <section className={cn(styles.cart, styles.bgRed)}>
        <h4 className={styles.title}>Практические модули</h4>
        <p className={styles.info}>
          Работа над собственными проектами: практика групповых взаимодействий,
          кейс-методы, эссе
        </p>
      </section>
      <section className={cn(styles.cart, styles.bgBlack)}>
        <h4 className={styles.title}>Итоговая аттестация</h4>
        <ul className={styles.info}>
          <li className={styles.item}>
            Бизнес-проектирование (подготовка итоговой аттестационной работы,
            консультирование по бизнес-проектированию)
          </li>
          <li className={styles.item}>Защита итоговой аттестационной работы</li>
        </ul>
      </section>
    </article>
  );
};
