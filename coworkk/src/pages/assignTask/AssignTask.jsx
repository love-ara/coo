// import React, { useState } from 'react';
// import styles from './index.module.css';
//
// const AssignTask = () => {
//     const [task, setTask] = useState({
//         title: '',
//         description: '',
//         priority: 'Medium',
//         dueDate: ''
//     });
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setTask((prevTask) => ({
//             ...prevTask,
//             [name]: value
//         }));
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         console.log('Task assigned:', task);
//     };
//
//     return (
//         <div className={styles.container}>
//             <h2 className={styles.title}>Assign a New Task</h2>
//             <form className={styles.form} onSubmit={handleSubmit}>
//                 <div className={styles.field}>
//                     <label htmlFor="title" className={styles.label}>Task Title</label>
//                     <input
//                         type="text"
//                         id="title"
//                         name="title"
//                         value={task.title}
//                         onChange={handleChange}
//                         className={styles.input}
//                         required
//                     />
//                 </div>
//                 <div className={styles.field}>
//                     <label htmlFor="description" className={styles.label}>Description</label>
//                     <textarea
//                         id="description"
//                         name="description"
//                         value={task.description}
//                         onChange={handleChange}
//                         className={styles.textarea}
//                         required
//                     />
//                 </div>
//                 <div className={styles.field}>
//                     <label htmlFor="priority" className={styles.label}>Priority</label>
//                     <select
//                         id="priority"
//                         name="priority"
//                         value={task.priority}
//                         onChange={handleChange}
//                         className={styles.select}
//                     >
//                         <option value="Low">Low</option>
//                         <option value="Medium">Medium</option>
//                         <option value="High">High</option>
//                     </select>
//                 </div>
//                 <div className={styles.field}>
//                     <label htmlFor="dueDate" className={styles.label}>Due Date</label>
//                     <input
//                         type="date"
//                         id="dueDate"
//                         name="dueDate"
//                         value={task.dueDate}
//                         onChange={handleChange}
//                         className={styles.input}
//                     />
//                 </div>
//                 <button type="submit" className={styles.submitButton}>Assign Task</button>
//             </form>
//         </div>
//     );
// };
//
// export default AssignTask;



import React, { useState } from 'react';
import styles from './index.module.css';

const AssignTask = ({ task, users }) => {
    const [selectedUser, setSelectedUser] = useState('');

    const handleUserChange = (e) => {
        setSelectedUser(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // // Handle task assignment logic here
        // console.log(`Task "${task.title}" assigned to user ID: ${selectedUser}`);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Assign Task</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label className={styles.label}>Task Title</label>
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    value={task.title}*/}
                    {/*    className={styles.input}*/}
                    {/*    readOnly*/}
                    {/*/>*/}
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Description</label>
                    {/*<textarea*/}
                    {/*    value={task.description}*/}
                    {/*    className={styles.textarea}*/}
                    {/*    readOnly*/}
                    {/*/>*/}
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Priority</label>
                    <input
                        type="text"
                        // value={task.priority}
                        // className={styles.input}
                        // readOnly
                    />
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Due Date</label>
                    <input
                        type="text"
                        // value={task.dueDate}
                        // className={styles.input}
                        // readOnly
                    />
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Assign to User</label>
                    <select
                        // value={selectedUser}
                        // onChange={handleUserChange}
                        // className={styles.select}
                        // required
                    >
                        {/*<option value="">Select a user</option>*/}
                        {/*{users.map((user) => (*/}
                        {/*    <option key={user.id} value={user.id}>*/}
                        {/*        {user.name}*/}
                        {/*    </option>*/}
                        {/*))}*/}
                    </select>
                </div>
                <button type="submit" className={styles.submitButton}>Assign Task</button>
            </form>
        </div>
    );
};

export default AssignTask;
