import React from 'react'
import TaskCard from '../components/taskCard';
import { useSelector, useDispatch } from 'react-redux';
import { infoList } from '../placeholder/infoList';

const MainPage = () => {

    return(
        <div>
            {
                infoList.map(index => {
                    <TaskCard title={index.title} desc={index.desc} id={index.id}/>
                })
            }
            <h1>hi</h1>
        </div>
    );
};

export default MainPage;