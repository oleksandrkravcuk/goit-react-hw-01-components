import React from 'react'

import Users from './Components/Profile/Profile'
import Frients from './Components/FriendList/FriendList'
import Transaction from './Components/TransactionHistory/TransactionHistory'
import Statistics from './Components/Statistics/Statistics'

const App = () => {
    return <>
    <Users/>
    <Statistics/>
    <Frients/>
    <Transaction/>
    </>
}

export default App