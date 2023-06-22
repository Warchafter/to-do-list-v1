import React from 'react'
import './css/taskCard.css'

const taskCard = (props) => {
    return (
        <div className='taskCardBody'>
            <h2>{props.title}</h2>
            <div className='spacerLine'></div>{/* this will be an spacer */}
            <p>{props.desc}</p>
        </div>
    );
};

export default taskCard;