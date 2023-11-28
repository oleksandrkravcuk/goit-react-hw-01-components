import css from './Statistics.module.css'
import React from 'react'


const Data = ( {data} ) =>{
    return (
    <>
    <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.statist}>
    {data.map(({ id, label, percentage }) => (
        <li className={css.item} key={id}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
        </li>))}
    </ul>
</section>
</>)
}



export default Data