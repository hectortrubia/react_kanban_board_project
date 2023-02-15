import "./style.css";
import React from "react";
import CreateTask from "../create-task";
import { useState } from "react";

function CardList() {

    const [newTask, updateTask] = useState (false);

    const handlerCreateTask = (e) => {

        if(newTask !== true){
            updateTask(true);
        }


    }

    return (

        <React.Fragment>
            <button onClick={handlerCreateTask}>Create new task</button>
            { newTask === true ? <CreateTask></CreateTask>:<></>}

        </React.Fragment>

    )
}

export default CardList;