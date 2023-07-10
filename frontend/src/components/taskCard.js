import React from 'react'
import './css/taskCard.css'


const taskCard = (props) => {

    return (
        <div className='taskCardBody'>
            <div className='taskCardTitleContainer'>
                <h2 className='taskCardTitle'>{props.title}</h2>
            </div>
            <div className='taskCardContent'>
                <p>{props.desc}</p>
            </div>
            <div className='spacerLine'></div>{/* this will be an spacer */}
        </div>
    );
};

export default taskCard;