import css from '../FriendList/FriendList.module.css'
import  FrientsItem  from './FriendItem'
import React from 'react'

export const FriendList = ( {friends} ) => {
    return (
        <ul className={css.fri}>
            {friends.map((friend) => (
            <FrientsItem
            key={friend.id}
            />
        ))}
        </ul>
    );
}


export default FriendList;