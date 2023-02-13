import React from 'react';
import './style.css';
import Nav from '../../components/nav';

function Home() {

    return (
        <React.Fragment>
            <Nav></Nav>
            <p className='home' >Hello i´m home page</p>
        </React.Fragment>

    )
}

export default Home;