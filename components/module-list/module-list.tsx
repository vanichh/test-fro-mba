/* eslint-disable react/jsx-key */
import styles from './module-list.module.scss';
import { ItemModule } from 'util/types/molule';
import { FC } from 'react';
import { ModuleItem } from 'components/module-item';

interface IProps {
  data: ItemModule;
}

export const ModuleList: FC<IProps> = ({ data }) => {
  const { title, list } = data;

  return (
    <article className={styles.conteiner}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.wrapper}>
        {list.map((item, i) => (
          <ModuleItem list={item} number={i + 1} key={i} />
        ))}
      </div>
    </article>
  );
};
