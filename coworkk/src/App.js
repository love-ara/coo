import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Auth, Home, LandingPage} from "./pages";
import Calendar from "./components/calendar/calendar";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path = "/dashboard" element={<Home/>}/>
                <Route path = "/calendar" element={<Calendar/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
