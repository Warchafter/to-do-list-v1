import React from 'react';
import './css/newTaskCard.css';

const newTaskCard = () => {

    const onCreateTaskClick = () => {
        
    }

    return (
        <div className='newTaskCardBody'>
            <div className='newTaskCardContent'>
                <button className='newTaskButton'>+</button>
            </div>
            <div className='newTaskSpacerLine'></div>{/* this will be an spacer */}
        </div>
    )
}

export default newTaskCard;