
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
import Dashboard from './Components/Dashboard/Dashboard';
import RequireAdmin from './Components/Login/RequireAdmin';
import MyProfile from './Components/Dashboard/MyProfile';
import AddReview from './Components/Dashboard/AddReview';
import MyOrders from './Components/Dashboard/MyOrders';
import MakeAdmin from './Components/Dashboard/MakeAdmin';
import AddProduct from './Components/Dashboard/AddProduct';
import ManageProducts from './Components/Dashboard/ManageProducts';
import ManageOrders from './Components/Dashboard/ManageOrders';
import Users from './Components/Dashboard/Users';
import Payment from './Components/Dashboard/Payment';
import Products from './Components/Pages/Products';


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
        <Route path="/products" element={<Products />} />
        <Route
          path="/tool/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="makeAdmin" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manageProducts" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path="manageOrders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}


export default App;
