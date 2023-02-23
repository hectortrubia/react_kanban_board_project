import "./style.css";
import React from "react";
import CreateTask from "../create-task";
import { useState } from "react";
import TaskCard from "../task-card";

function CardList() {

    const [newTask, updateTask] = useState(false);

    const handlerCreateTask = (e) => {

        if (newTask !== true) {
            updateTask(true);
        }


    }

    return (

        <React.Fragment>

            <div className="list-container-todo">
                <div className="header-card-list">
                    <div className="left-header">
                        <div className="circle"></div>
                        <div className="to-do">To do</div>
                    </div>
                    <div className="button-container">
                        <button className="button-task" onClick={handlerCreateTask}>+</button>
                    </div>
                </div>
                <div className="new-task">
                    {newTask === true ? <CreateTask></CreateTask> : <></>}
                </div>
                <TaskCard></TaskCard>

            </div>


        </React.Fragment>

    )
}

export default CardList;