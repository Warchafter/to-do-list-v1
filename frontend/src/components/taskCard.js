import React from 'react'
import './css/taskCard.css'

const taskCard = (title, desc) => {
    return (
        <div className='taskCardBody'>
            <h2>{title}a</h2>
            <div className='spacerLine'></div>{/* this will be an spacer */}
            <p>{desc}a </p>
        </div>
    )
}

export default taskCard;