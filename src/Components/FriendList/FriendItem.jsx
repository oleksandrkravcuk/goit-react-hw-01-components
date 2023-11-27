import css from './FriendList.module.css'
import React from 'react'




const FriendItem = ( {friend} ) => {
    const {id, avatar, name, isOnline} = friend;

    return (
    <li className={css.item} key={id}>
        <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
    );
    
};

export default FriendItem;