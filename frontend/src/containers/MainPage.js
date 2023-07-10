import React from 'react'
import TaskCard from '../components/taskCard';
import NewTaskCard from '../components/newTaskCard';
import { useSelector, useDispatch } from 'react-redux';
import { infoList } from '../placeholder/infoList';
import "./css/MainPage.css";

const MainPage = () => {

    return(
        <div className='grid-container-task'>
            {
                infoList.map((key, index) => {
                    console.log(key);
                    return (
                        <div className='grid-item-task'>
                                <TaskCard title={key.title} desc={key.desc} id={key.id}/>
                        </div>
                        )
                })
            }
            <NewTaskCard/>
        </div>
    );
};

export default MainPage;