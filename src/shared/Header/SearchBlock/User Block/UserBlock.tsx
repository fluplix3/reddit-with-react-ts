import React from 'react';
import { Break } from '../../../Break';
import { Icon } from '../../../Icon';
import { EColor, Text } from '../../../Text'
import styles from './userblock.css'

interface IUserBlockProps {
    avatarSrc?: string
    username?: string
}

function UserBlock({ avatarSrc, username }: IUserBlockProps) {
    return (
        <a href='https://www.reddit.com/api/v1/authorize?client_id=WHIuLro_4QasFEYt4oo6-g&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
            className={styles.userBox}>
            <div className={styles.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
                    : <Icon name={'anon'} />
                }
            </div>

            <div className={styles.username}>
                <Break size={12} />
                <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>
            </div>
        </a>
    );
}

export default UserBlock;