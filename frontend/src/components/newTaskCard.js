import React from 'react';
import './css/newTaskCard.css';

const newTaskCard = () => {

    const onCreateTaskClick = () => {
        
    }

    return (
        <div className='newTaskCardBody'>
            <div className='newTaskSpacerLine newTaskDiv1'></div>{/* this will be an spacer */}
            <div className='newTaskCardContent newTaskDiv2'>
                <button className='newTaskButton'>Button 80</button>
            </div>
            <div className='newTaskSpacerLine newTaskDiv3'></div>{/* this will be an spacer */}
        </div>
    )
}

export default newTaskCard;