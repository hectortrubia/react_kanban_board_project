import './style.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

function SearchTask() {

    const date = new Date();
    const localDate = date.toUTCString();
    const stringDate = date.toDateString()
    const [currentDate, updateDate] = useState(localDate);


    function changeDate() {



        if (currentDate ===localDate) {

            updateDate(stringDate);
            console.log("es igual");
        }
        else{
            updateDate(localDate);
            console.log("no es igual");
        }

    }

    return (

        <Container className='search'>
            <div>
                <p>Version 1.0</p>
                <p>{`Date: ${currentDate}`}</p>
                <button onClick={changeDate}>Change date</button>
            </div>
            <div>
                <input type="text" placeholder='filter cards' />
            </div>
        </Container>
    );

}

export default SearchTask;