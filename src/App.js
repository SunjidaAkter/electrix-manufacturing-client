
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
import MyPortfolio from './Components/Pages/MyPortfolio';
import RequireAuth from './Components/Login/RequireAuth';
import Purchase from './Components/Home/Purchase';
import NotFound from './Components/Shared/NotFound';


function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route
          path="/tool/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
