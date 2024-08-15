import style from "./index.module.css"
import {Sidebar, TaskHeader} from "../../components";

const CreateSubTask = ()=> {
    return (
        <>
            <TaskHeader/>
            <Sidebar/>
            <div className={style.backgroundCover}>

                <div className={style.createTask}>
                    <p className={style.title}>Create SubTask</p>
                    <hr className={style.horizontalLine}/>
                    <form>
                        <label htmlFor={"title"}>Title:</label>
                        <input className={style.projectTitle} placeholder={"Title"} type={"text"} id={"title"}
                               name={"title"} required/>

                        <label htmlFor={"description"}>Description</label>
                        <textarea className={style.description} placeholder={"Description of the Project"}
                                  id={"description"} name={"description"} required/>

                        <label htmlFor="start-date">Start Date:</label>
                        <input className={style.dates} type="datetime-local" id="start-date" name="start-date"
                               required/>

                        <label htmlFor="due-date">Due Date:</label>
                        <input className={style.dates} type="datetime-local" id="due-date" name="due-date" required/>

                        <label>Priority:</label>
                        <select id={"priority"} name={"priority"} required>
                            <option value={"LOW"}>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Urgent</option>
                        </select>

                        <button className={style.cancelButton} type={"submit"}>Cancel</button>
                        <button className={style.createTaskButton} type="submit">Create SubTask</button>

                    </form>
                </div>

            </div>
        </>
    )
}

export default CreateSubTask;