import './style.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

function SearchTask() {

    const date = new Date();
    const stringDate = date.toUTCString()

    function spanishDate(date, format) {

        let shortDate =
            format.replace('mm', date.getMonth() + 1)
                .replace('yy', date.getFullYear())
                .replace('dd', date.getDate());

        return shortDate;
    }

    let spainDate = spanishDate(date, 'dd/mm/yy');
    let americantext = "Change to American Date";
    let spanishtext = "Cambiar a Fecha de España";
    let americanupdated = "Updated on:"
    let spainupdated = "Actualizado en:"

    const [currentDate, updateDate] = useState(spainDate);
    const [currenttext, updateText] = useState(americantext);
    const [currentlang, updateLang] = useState(spainupdated);


    function changeDate() {

        if (currentDate === spainDate) {

            updateDate(stringDate);
            updateText(spanishtext);
            updateLang(americanupdated);

        }
        else if (currentDate !== spainDate) {

            updateDate(spainDate);
            updateText(americantext);
            updateLang(spainupdated);

        }

    }

    return (

        <Container className='search'>
            <div className='container-left'>
                <p className='version'>Version 1.0</p>
                <div className='date'>
                    <button className='button' onClick={changeDate}>{currenttext}</button>
                    <div>{`${currentlang}  ${currentDate}`}</div>
                </div>
            </div>
            <div>
                <input className='inp' type="text" placeholder='filter cards' />
            </div>
        </Container>
    );

}

export default SearchTask;