import React from 'react';
import './style.css';
import Nav from '../../components/nav';
import SearchTask from '../../components/search-tasks';

function Home() {

    return (
        <React.Fragment>

            <Nav></Nav>
            <SearchTask></SearchTask>

        </React.Fragment>

    )
}

export default Home;