import {Sidebar, TaskHeader} from "../../components";
import style from "./index.module.css";


const CreateSubTask = ()=> {
    return (
        <>
            <TaskHeader />
            <Sidebar />
            <div className={style.backgroundCover}>

                <div className={style.createSubTask}>
                    <p className={style.header}>Create SubTask</p>
                    <hr className={style.horizontalLine} />
                    <form>
                        <label className={style.textLabel} htmlFor={"title"}>Title:</label>
                        <input className={style.title} placeholder={"Title"} type={"text"} id={"title"} name={"title"}
                               required/>

                        <label className={style.textLabel} htmlFor={"description"}>Description</label>
                        <textarea className={style.description} placeholder={"SubTask Description..."} id={"description"}
                                  name={"description"} required/>

                        <label className={style.textLabel} htmlFor="start-date">Start Date:</label>
                        <input className={style.dates} type="datetime-local" id="start-date" name="start-date"
                               required/>

                        <label className={style.textLabel} htmlFor="due-date">Due Date:</label>
                        <input  className={style.dates} type="datetime-local"
                                id="due-date" name="due-date" required/>

                        <label className={style.textLabel} >Priority:</label>
                        <select className={style.priority} style={{marginBottom: "15px"}} id={"priority"} name={"priority"} required>
                            <option value={"LOW"}>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Urgent</option>
                        </select>

                        <button className={style.cancelButton} type={"submit"}>Cancel</button>
                        <button className={style.createSubTaskButton} type="submit">Create SubTask</button>

                    </form>
                </div>

            </div>
        </>
    )
}

export default CreateSubTask;
