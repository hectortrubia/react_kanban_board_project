import React from 'react';
import './style.css';
import Nav from '../../components/nav';
import SearchTask from '../../components/search-tasks';
import CreateTask from '../../components/create-task';

function Home() {

    return (
        <React.Fragment>

            <Nav></Nav>
            <SearchTask></SearchTask>
            <CreateTask></CreateTask>

        </React.Fragment>

    )
}

export default Home;