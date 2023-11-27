import css from '../FriendList/FriendList.module.css'
import { FrientsItem } from './FriendItem'


const Frients = () =>{
    return <ul className={css.friends}>
    <FrientsItem/>
    </ul>
}


export default Frients