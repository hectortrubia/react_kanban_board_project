import './style.css';
import React from 'react';


function TaskCard() {

    return (
        <React.Fragment>

        <div className='task-card-container'>
            <div className='green-circle-big'>
                <div className='green-circle-small'></div>
            </div>
            <div className='info-container'>
                <div className = 'title-note'>Creación del CI/CD para el frontal</div>
                <div className='date-note'>#23 created on 30/07/2021 8:34:54</div>
            </div>
            <button className='delete-icon'>🗑️</button>
        </div>

        </React.Fragment>

    )
}

export default TaskCard;