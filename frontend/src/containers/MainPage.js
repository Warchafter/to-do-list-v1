import React from 'react'
import TaskCard from '../components/taskCard';
import { useSelector, useDispatch } from 'react-redux';
import { infoList } from '../placeholder/infoList';

const MainPage = () => {

    return(
        <div className='grid-container-task'>
            {
                infoList.map((key, index) => {
                    console.log("key: ", key);
                    console.log("index: ", index);
                    return (
                        <div className='grid-item-task'>
                                <TaskCard title={index.title} desc={index.desc} id={index.id}/>
                        </div>
                        )
                })
            }
        </div>
    );
};

export default MainPage;