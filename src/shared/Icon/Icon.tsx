import React from 'react';
import BlockIcon from '../icons/BlockIcon';
import CommentIcon from '../icons/CommentIcon';
import { MenuIcon } from '../icons';
import SaveIcon from '../icons/SaveIcon';
import ShareIcon from '../icons/ShareIcon';
import WarningIcon from '../icons/WarningIcon';
import IconAnon from '../icons/IconAnon';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export const EIcons = {
    block: <BlockIcon />,
    comment: <CommentIcon />,
    menu: <MenuIcon />,
    save: <SaveIcon />,
    share: <ShareIcon />,
    warning: <WarningIcon />,
    anon: <IconAnon />
}

interface IIconProps {
    name: keyof typeof EIcons;
    size?: TSizes;
}

export function Icon( props: IIconProps) {
    const {name, size = 16} = props

    return (
        <div style={{width: size, height: size}}>
            {EIcons[name]}
        </div>
    );
}

export default Icon;