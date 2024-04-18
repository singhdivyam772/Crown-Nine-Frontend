
import { Routes, Route } from "react-router-dom"
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { app } from './MainComponents/firebaseAuth'; 
import { useState } from "react"
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
import { toast } from 'react-toastify';
import NavBar from "./MainComponents/NavBar";
import HomePage from "./MainComponents/HomePage";
import ProductDetails from "./Pages/ProductDetails";

function App() {

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
        <Route path='/' element={<HomePage/>}/>       
        <Route path='/productdetails' element={<ProductDetails/>}/> 
      </Routes>
     
    </div>
  
  
  )
}

export default App
