import React, { useEffect, useRef, useState } from 'react'
import TodoCss from "./todo.module.css"
import toast from 'react-hot-toast'
const Todo = () => {
    const data = JSON.parse(localStorage.getItem("todo")) || [
        { task: "Buy Car", complete: true },
        { task: "Buy Bike", complete: true },
        { task: "Buy Phone", complete: false }
    ]
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState(data)
    const [Ctask, setCtask] = useState(0)
    const [Rtask, setRtask] = useState(0)
    const darkElement = useRef();
    const darkIconElement = useRef()
    function handleForm(e) {
        e.preventDefault();
        if (!input) {
            toast.error("Please add task")
        }
        else {
            let isVerify = tasks.some((value, index) => {
                return value.task.toLowerCase() === input.toLowerCase()
            });

            if (isVerify) {
                toast.error("Task already added")
            }
            else {
                toast.success("Task added successfully")
                setTasks([...tasks, { task: input, complete: false }])
                setInput("")
            }

        }
    }

    function handleDelete(id) {
        let copyOfTask = [...tasks]
        const deleteValue = copyOfTask.filter((item, index) => {
            return index !== id
        })
        setTasks(deleteValue)
    }

    function handleUpdate(id) {
        const copyOfTask = [...tasks]
        const oldTask = copyOfTask[id].task
        let newTask = prompt(`Update Task :- ${oldTask}`, oldTask)
        let newObj = { task: newTask, complete: false }
        copyOfTask.splice(id, 1, newObj)
        setTasks(copyOfTask)
    }

    function handleCheck(id) {
        console.log(id)
        const copyOfTasks = [...tasks]
        copyOfTasks[id].complete = !copyOfTasks[id].complete
        setTasks(copyOfTasks)
    }

    useEffect(() => {
        const copyOfTasks = [...tasks]
        const completedTasks = copyOfTasks.filter((value, index) => {
            return value.complete
        })
        setCtask(completedTasks.length)

        const remainingTasks = copyOfTasks.filter((value, index) => {
            return !value.complete
        })
        setRtask(remainingTasks.length)

        localStorage.setItem("todo", JSON.stringify(copyOfTasks))
    }, [tasks])

    function handleDarkMode() {
        const bgColor = darkElement.current.style.backgroundColor
        if (bgColor == "" || bgColor == "white") {
            darkElement.current.style.backgroundColor = "black"
            darkElement.current.style.color = "white"
            darkIconElement.current.className = "bi bi-toggle-on text-success fs-5"
        }
        else {
            darkElement.current.style.backgroundColor = "white"
            darkElement.current.style.color = "black"
            darkIconElement.current.className = "bi bi-toggle-on text-danger fs-5"
        }
    }
    return (
        <div className={TodoCss.todo_container} ref={darkElement}>
            <div>
                <h1 className='text-center'>Todo Application</h1>
                <div className='text-center'>
                    <i className="bi bi-toggle-on text-success fs-5" ref={darkIconElement} onClick={handleDarkMode}></i>
                </div>
                <div className={TodoCss.task_summary}>
                    <span>✅ Completed Task : {Ctask}</span>
                    <span>📌 Remaining Task : {Rtask}</span>
                </div>
                <form action="" onSubmit={handleForm}>
                    <div className={TodoCss.input_section}>
                        <input type="text" name="" id="" value={input} onChange={(e) => { setInput(e.target.value) }} className={TodoCss.input_box} />
                        <input type="submit" value="Add Task" className={TodoCss.input_btn} />
                    </div>
                </form>
                {
                    tasks.map((value, index) => (
                        <ul key={index} className={TodoCss.task_list}>
                            <li>
                                <input type="checkbox" name="" id="" className={TodoCss.checkbox} checked={value.complete} onClick={() => { handleCheck(index) }} />
                                <span style={{ textDecoration: value.complete ? "line-through red" : "" }} className='fw-bold fs-4'>{value.task}</span>
                                <div className={TodoCss.action}>
                                    <i className="bi bi-trash text-danger fs-4 btn" onClick={() => { handleDelete(index) }}></i>
                                    <i className="bi bi-pencil text-success fs-4 me-2 btn" onClick={() => { handleUpdate(index) }}></i>
                                </div>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo