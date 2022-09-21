/* eslint-disable react/jsx-key */
import styles from './module.item.module.scss';
import { List } from 'util/types/molule';
import { FC, useState } from 'react';
import { useIsMobile } from 'util/hooks';
import cn from 'classnames';

interface IProps {
  list: List[];
  number: number;
}

export const ModuleItem: FC<IProps> = ({ list, number }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const iSMobile = useIsMobile();

  const handleShow = () => setIsOpen((prev) => !prev);

  return (
    <section className={styles.section}>
      <p
        onClick={iSMobile ? handleShow : undefined}
        className={cn(styles.name, {
          [styles.open]: isOpen,
        })}
      >
        {number} модуль
      </p>
      <ul
        className={cn(styles.list, {
          [styles.open]: isOpen,
        })}
      >
        {list.map(({ string, id }) => (
          <li className={styles.item} key={id}>
            {string}
          </li>
        ))}
      </ul>
    </section>
  );
};
