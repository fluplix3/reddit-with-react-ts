import React from 'react';
import styles from './menuitemslist.css';
import { Text, EColor } from '../../../../Text'
import { Icon } from '../../../../Icon/Icon';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <Icon name={'comment'} />
        <Text size={12} color={EColor.grey99}>Комментарии</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={'share'} />
        <Text size={12} color={EColor.grey99}>Поделиться</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={'block'} />
        <Text size={12} color={EColor.grey99}>Скрыть</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={'save'} />
        <Text size={12} color={EColor.grey99}>Сохранить</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={'warning'} />
        <Text size={12} color={EColor.grey99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
