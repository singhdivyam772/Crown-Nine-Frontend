
import { Routes, Route } from "react-router-dom"
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { app } from './MainComponents/firebaseAuth'; 
import { useEffect, useState } from "react"
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
import { toast } from 'react-toastify';
import NavBar from "./MainComponents/NavBar";
import HomePage from "./MainComponents/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import AddProduct from "./Pages/AddProduct";
import axios from "axios";
import ProductData from './AllProductData';
import ReturnPolicy from "./Pages/ReturnPolicy";
import ShippingPolicy from "./Pages/ShippingPolicy";
import TermsCondition from "./Pages/TermsCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Footer from "./MainComponents/Footer";
import FeedBack from "./MainComponents/FeedBack";
import ProductNewArrival from "./MainComponents/ProductNewArrival";
import CategoryProduct from "./MainComponents/CategoryProduct";
import CategoryCard from "./Pages/CategoryCard";

function App() {

// product data
const [allProduct, setAllProduct] = useState();
const [isLoading, setISLoading] = useState(false);
useEffect(()=>{
  setISLoading(true);
  setAllProduct(ProductData)
  setISLoading(false);
}, []);
// console.log(allProduct)

  const [emailData, setEmailData] = useState({
    userName: '',
    emailId: '',
  })
  // email login
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userName = user.displayName; // Retrieve the user's display name
      const emailId = user.email;
      console.log(emailId);
      setEmailData({userName: userName, emailId: emailId});
      toast.success(`Welcome ${userName} !`, {
        autoClose: 2000
      });
    } catch (error) {
      toast.error(error.message, {
        autoClose: 2000
      });
    }
  };
  
  // console.log(emailData);
  return (
    <div className=" overflow-x-hidden ">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage allProduct={allProduct} isLoading={isLoading} />}/>       
        <Route path='/productdetails' element={<ProductDetails allProduct={allProduct}/>}/> 
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/addProduct' element={<AddProduct/>}/> 
        <Route path='/privatepolicy' element={<PrivacyPolicy/>}/>
        <Route path='/returnpolicy' element={<ReturnPolicy/>}/>
        <Route path='/shipingpolicy' element={<ShippingPolicy/>}/> 
        <Route path='/termscondition' element={<TermsCondition/>}/> 
        <Route path='/productCard' element={<CategoryCard/>}/> 
      </Routes>
     <FeedBack/>
     <Footer/>
    </div>
  
  
  )
}

export default App
