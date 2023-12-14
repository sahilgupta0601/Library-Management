
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Books from './Pages/Books';
import Addbooks from './Pages/Addbooks';
import UpdateForm from './Components/updateForm';
function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route path="/books" element={<Books></Books>}></Route>
      <Route path="/addbooks" element={<Addbooks></Addbooks>}></Route>
      <Route path="/books/:id" element={<UpdateForm/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
