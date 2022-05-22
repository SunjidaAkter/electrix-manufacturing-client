
import './App.css';
import Nav from './Components/Shared/Nav';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/Login/SignUp';
import Footer from './Components/Shared/Footer';
import Blogs from './Components/Pages/Blogs';
import Home from './Components/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
