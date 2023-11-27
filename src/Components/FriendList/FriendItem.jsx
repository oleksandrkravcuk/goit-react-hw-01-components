import css from '../FriendList/FriendList.module.css'
import friends from '../Path/friends.json'



export const FrientsItem = () =>{
    return friends.map(({avatar, name, isOnline, id}) => (
    <li className={css.item} key={id}>
        <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
    ));
};

