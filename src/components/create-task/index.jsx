import './style.css';
import React from 'react';




function CreateTask() {

    return (

        <React.Fragment>
            <form action="" className='form'>
                <div className='text-area-container'>
                    <input name="text" className='textareainput' placeholder="Enter a note" rows="10" cols="10" ></input>
                </div>
                <div className='buttons-container'>
                    <button className='buttonadd'>Add</button>
                    <button className='buttoncancel'>Cancel</button>
                </div>
            </form>

        </React.Fragment>

    )

}

export default CreateTask;