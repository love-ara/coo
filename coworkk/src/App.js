import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={App} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
