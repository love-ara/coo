import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Auth, Home, LandingPage} from "./pages";
import Calendar from "./components/calendar/calendar";
import CreateTask from "./pages/createTask/CreateTask";
import UpdateTask from "./pages/editTask/EditTask";
import CreateProject from "./pages/createProject/CreateProject";
import CreateSubTask from "./pages/createSubTask/CreateSubTask";
import AssignTask from "./pages/assignTask/AssignTask";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<LandingPage />} />
                <Route path ="/auth" element={<Auth />} />
                <Route path = "/dashboard" element={<Home/>}/>
                <Route path = "/calendar" element={<Calendar/>}/>
                <Route path ="/createproject" element={<CreateProject/>}/>
                <Route path = "/createtask" element={<CreateTask/>}/>
                <Route path ="/createsubtask" element={<CreateSubTask/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
