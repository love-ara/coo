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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
