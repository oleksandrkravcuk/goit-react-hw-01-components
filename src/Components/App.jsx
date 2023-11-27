import React from 'react';

import friends from './FriendList/friends.json';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import transactions from './TransactionHistory/transactions.json';

import Users from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import Transaction from './TransactionHistory/TransactionHistory';
import Statistics from './Statistics/Statistics';



const App = () => {
    return (
    <>
    <Users user={user}/>
    <Statistics data={data}/>
    <FriendList friends={friends} />
    <Transaction transactions={transactions}/>
    </>
    );
}

export default App