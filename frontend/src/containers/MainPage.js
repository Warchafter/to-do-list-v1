import React from 'react'
import TaskCard from '../components/taskCard';
import { useSelector, useDispatch } from 'react-redux';

const MainPage = () => {
    const exampleData = useSelector(state => state.example.data);
    const loading = useSelector(state => state.example.loading);
    const error = useSelector(state => state.example.error);

    const dispatch = useDispatch();

    // Dispatch an action
    dispatch({ type: 'EXAMPLE_ACTION' });

    return(
    <div>
        <TaskCard></TaskCard>
    </div>
    );
};

export default MainPage;