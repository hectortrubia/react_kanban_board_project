import './style.css';
import React from 'react';

function Nav() {

    return (
        <React.Fragment>
            <div className='nav'>
                <img className="img" src="https://cdn-icons-png.flaticon.com/512/5065/5065589.png" alt="img" />
                <p className="text">Kanban Board</p>
            </div>

        </React.Fragment>
    )
}

export default Nav;