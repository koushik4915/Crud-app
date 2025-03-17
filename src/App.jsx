import Create from "./assets/Create";
import Home from "./assets/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Update from "./assets/Update";


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Update />}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
