import style from "./index.module.css"
import {Sidebar, TaskHeader} from "../../components";

const CreateProject = () => {
    return (
        <>
            <TaskHeader />
            <Sidebar />
            <div className={style.backgroundCover}>

                <div className={style.createProject}>
                    <p className={style.header}>Create Project</p>
                    <hr className={style.horizontalLine} />
                    <form>
                        <label className={style.textLabel} htmlFor={"title"}>Title:</label>
                        <input className={style.title} placeholder={"Title"} type={"text"} id={"title"} name={"title"} required/>

                        <label className={style.textLabel} htmlFor={"description"}>Description</label>
                        <textarea className={style.description} placeholder={"Project Description"} id={"description"} name={"description"} required/>

                        <label className={style.textLabel} htmlFor="start-date">Start Date:</label>
                        <input className={style.dates} type="datetime-local" id="start-date" name="start-date" required/>

                        <label className={style.textLabel} htmlFor="due-date">Due Date:</label>
                        <input style={{marginBottom : "15px"}}  className={style.dates} type="datetime-local" id="due-date" name="due-date" required/>

                        <button className={style.cancelButton} type={"submit"}>Cancel</button>
                        <button className={style.createProjectButton} type="submit">Create Project</button>

                    </form>
                </div>

            </div>
        </>
    )
}

export default CreateProject;