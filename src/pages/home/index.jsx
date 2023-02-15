import React from 'react';
import './style.css';
import Nav from '../../components/nav';
import SearchTask from '../../components/search-tasks';
import CardList from '../../components/card-list';

function Home() {

    return (
        <React.Fragment>

            <Nav></Nav>
            <SearchTask></SearchTask>
            <CardList></CardList>

        </React.Fragment>

    )
}

export default Home;