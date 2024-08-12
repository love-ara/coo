import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Auth, Home, LandingPage} from "./pages";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path = "/dashboard" element={<Home/>}/>
                {/*/!* project  *!/*/}
                {/*<Route path="/projects" element={<Projects />} />*/}
                {/*<Route path="/project/:id" element={<ProjectDetails />} />*/}
                {/*<Route path="/project/update/:id" element={<UpdateProject />} />*/}
                {/*/!* task  *!/*/}
                {/*<Route path="/task" element={<Tasks />} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
