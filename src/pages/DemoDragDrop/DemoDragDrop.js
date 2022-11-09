import React, { useRef, useState } from 'react'

const defaultValue = [
    { id: 1, taskName: 'Task 1' },
    { id: 2, taskName: 'Task 2' },
    { id: 3, taskName: 'Task 3' },
    { id: 4, taskName: 'Task 4' },
    { id: 5, taskName: 'Task 5' },
]


export default function DemoDragDrop(props) {
    const [taskList, setTaskList] = useState(defaultValue);
    const tagDrag = useRef({})

    const handleDragEnter = (e, taskDragEnter, index) => {
        let taskListUpdate = [...taskList]
        let indexDragTag = taskListUpdate.findIndex(task => task.id === tagDrag.current.id)
        let indexDragEnter = taskListUpdate.findIndex(task => task.id === taskDragEnter.id)
        let temp = taskListUpdate[indexDragTag]
        taskListUpdate[indexDragTag] = taskListUpdate[indexDragEnter]
        taskListUpdate[indexDragEnter] = temp
        setTaskList(taskListUpdate)
    }
    const handleDragStart = (e, task, index) => {
        console.log(e.target);
        console.log('task', task);
        tagDrag.current = task
    }
    return (
        <div className="container">
            <div className="text-center display-4">Task list</div>
            <div className="row">
                <div className="col-2"></div>
                <div className="bg-dark p-5 col-4">
                    {taskList.map((task, index) => {
                        return <div
                            onDragStart={(e) => { handleDragStart(e, task, index) }}
                            onDragEnter={(e) => { handleDragEnter(e, task, index) }}
                            draggable="true"
                            key={index}
                            className="bg-success text-white m-1 p-3">
                            {task.taskName}
                        </div>
                    })}
                </div>
                <div className="col-2 bg-primary" style={{ height: 500 }} ></div>

            </div>

        </div>
    )
}
