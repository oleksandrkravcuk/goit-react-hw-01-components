import css from './FriendList.module.css'
import  FriendItem  from './FriendItem'
import React from 'react'

const FriendList = ( {friends} ) => {
    return (
        <ul className={css.fri}>
            {friends.map((friend) => (
            <FriendItem
            key={friend.id}
            friend={friend}
            />
        ))}
        </ul>
    );
}


export default FriendList;