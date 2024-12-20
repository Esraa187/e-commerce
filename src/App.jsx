import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import AccountEditProfile from './components/AccountEditProfile';
import ScrollToTop from './components/ScrollToTop';
import BillingCheckout from './components/BillingCheckout';
import CatiegoriesItems from './components/CatiegoriesItems';
import AllProducts from './components/AllProducts';
import { ToastContainer } from 'react-toastify';



function App() {
  const { currentUser, loading } = useContext(UserContext);

  const ProtectedRoute = (props) => {
    if (loading) {
      return <div>Loading...</div>; // Show a loading spinner or placeholder
    }
    if (currentUser == null) {
      return <Navigate to="/login" />;
    }
    return props.children;
  };

  return (
    <>
      <Navbar />
      <hr className="m-0" />
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        <Route element={<HomePage />} path=" " />
        <Route element={<HomePage />} path="/" />
        <Route element={<HomePage />} path="/home" />
        <Route element={<ProtectedRoute><About /></ProtectedRoute>} path="/about" />
        <Route element={<ProtectedRoute><Contact /></ProtectedRoute>} path="/contact" />
        <Route element={<ProtectedRoute><Cart /></ProtectedRoute>} path="/cart" />
        <Route element={<ProtectedRoute><AllProducts /></ProtectedRoute>} path="/allProducts" />
        <Route element={<ProtectedRoute><Wishlist /></ProtectedRoute>} path="/wishlist" />
        <Route element={<ProtectedRoute><AccountEditProfile /></ProtectedRoute>} path="/account" />
        <Route element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} path="/product-details/:id" />
        <Route element={<ProtectedRoute><BillingCheckout /></ProtectedRoute>} path="/billing" />
        <Route element={<ProtectedRoute><CatiegoriesItems /></ProtectedRoute>} path="/categories/:nameofCategory" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        {/* <Route element={<NotFound />} path="*" /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
