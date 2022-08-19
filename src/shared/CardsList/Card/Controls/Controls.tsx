import React from 'react';
import { CommentsButton } from './buttons/CommentsButton';
import { KarmaCounter } from './buttons/KarmaCounter';
import { SaveButton } from './buttons/SaveButton';
import { ShareButton } from './buttons/ShareButton';
import styles from './controls.css';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentsButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
