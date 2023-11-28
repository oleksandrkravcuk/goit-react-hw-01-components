import css from './Statistics.module.css'
import React from 'react'
import { RandomColor } from './RandomColor';


const Data = ({ title, data }) =>{
    return (
    <>
    <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statist}>
    {data.map(({ id, label, percentage }) => (
        <li className={css.item} key={id} style={{ backgroundColor: RandomColor() }}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
        </li>))}
    </ul>
</section>
</>)
}



export default Data