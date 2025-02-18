import React from 'react'

export const ShowTask = ({taskList, setTaskList ,task, setTask}) => {

    const handleEdit = (id) =>{
        const selectedtask = taskList.find(todo => todo.id === id);
        setTask(selectedtask)
    }

    const handleDelete = (id) =>{

        const updatedTaskList = taskList.filter(todo => todo.id !== id);
        setTaskList(updatedTaskList);
    }
  
    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
            </div>
            <ul>
                {taskList.map((todo) => (
                    <li key={todo.id}>
                        <p>
                            <span className="name">{todo.name}</span>
                            <span className="time">{todo.time}</span>
                        </p>
                        <i onClick={() => handleEdit(todo.id)} className="bi bi-pen-fill"></i>
                        <i onClick={() => handleDelete(todo.id)} className="bi bi-trash-fill"></i>
                    </li>

                ))}

            </ul>
        </section>

    )
}
