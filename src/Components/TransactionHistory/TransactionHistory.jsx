import css from '../TransactionHistory/TransactionHistory.module.css'
import React from 'react';



const Transaction = ( { transactions } ) => {
    return (
        <table className={css.container}>
            <thead>
            <tr className={css.title}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody className={css.data}>
            {transactions.map(({ id, type, amount, currency }) => (
                <tr className={css.component} key={id}>
                <td className={css.types}>{type}</td>
                <td className={css.amount}>{amount}</td>
                <td className={css.currency}>{currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};


    export default Transaction 