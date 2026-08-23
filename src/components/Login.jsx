import {useState, useRef} from 'react'
import Header from "./Header";
import {checkValidateData} from "../utills/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utills/firebase";


const Login = () => {
  const [isSignForm, setisSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

const handleSignInBtnClick = () => {
 const message =  checkValidateData(email.current.value, password.current.value)
 setErrorMessage(message);
 if(message) return;
 
 if(!isSignForm) {
  //sign up logic
  console.log("ln22--->auth-",auth)
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("ln25--->",user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +errorMessage)
    // ..
  });
 } else {
  //signIn logic
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("ln40--->",user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +errorMessage)
  });
 }

}

  const toggleSingnInButton = () => {
    //to switch b/w signin and signup 
    setisSignForm(!isSignForm)
  }
  return (
    <div>
      <div>
      <Header/>
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/IN-en-20251110-TRIFECTA-perspective_46e74acc-70aa-4691-988a-dbcf958149d1_large.jpg" alt="JioLogo" />
      </div>
      </div>
      <form 
      onSubmit={(e) => e.preventDefault()}
      className="absolute bg-black/80 w-3/12 mx-auto right-0 left-0 my-36 text-white p-12 rounded-lg">
        <h1 className="font-bold text-2xl py-4 my-2 text-white">{isSignForm ? "Sign In" : "Sign Up"}</h1>
        <input type="text"
        ref={email} //reference for the rmail value
        placeholder = "Email address" className="p-4 my-4 w-full bg-gray-700"/>
        { !isSignForm && <input 
        type="text" placeholder = "Full Name" className="p-4 my-4 w-full bg-gray-700"/>
        }
        
        <input type="password"
        ref={password}
        placeholder = "Enter password" className="p-4 my-4 w-full bg-gray-700"/>
        <p className="text-red-700">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleSignInBtnClick}>{isSignForm ? "Sign In" : "Sign Up"}</button>
        <div>
        <p className="py-4 cursor-pointer" onClick={toggleSingnInButton}>{isSignForm ? "New to Netflix? Sign Up now" : "Already registered> Sign In now"}</p>

        </div>
      </form>
    </div>
  )
}

export default Login