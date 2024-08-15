import style from "./index.module.css"
import {Sidebar, TaskHeader} from "../../components";

const CreateTask = () => {
    return (
        <>
            <TaskHeader />
            <Sidebar />
            <div className={style.backgroundCover}>

                <div className={style.createTask}>
                    <p className={style.title}>Create Task</p>
                    <hr className={style.horizontalLine} />
                    <form>
                        <label htmlFor={"title"}>Title:</label>
                        <input className={style.taskTitle} placeholder={"Title"} type={"text"} id={"title"} name={"title"} required/>

                        <label htmlFor={"description"}>Description</label>
                        <textarea className={style.description} placeholder={"Description of the Project"} id={"description"} name={"description"} required/>

                        <label htmlFor="start-date">Start Date:</label>
                        <input className={style.dates} type="datetime-local" id="start-date" name="start-date" required/>

                        <label htmlFor="due-date">Due Date:</label>
                        <input className={style.dates} type="datetime-local" id="due-date" name="due-date" required/>

                        <label>Priority:</label>
                        <select id={"priority"} name={"priority"} required>
                            <option value={"LOW"}>Low</option>
                            <option >Medium</option>
                            <option>High</option>
                            <option>Urgent</option>
                        </select>

                        <button className={style.cancelButton} type={"submit"}>Cancel</button>
                        <button className={style.createTaskButton} type="submit">Create Task</button>

                    </form>
                </div>

            </div>
        </>
    )
}

export default CreateTask;