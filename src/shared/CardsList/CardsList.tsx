import React, { useContext } from 'react';
import { postsContext, PostsContextProvider } from '../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
  const postsList = useContext(postsContext)

  return (
    <ul className={styles.cardsList}>
      {postsList.postsData?.map(
        posts => <PostsContextProvider children={posts} />
      )}
    </ul>
  );
}
