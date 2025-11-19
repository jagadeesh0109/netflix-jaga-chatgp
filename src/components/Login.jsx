import {useState} from 'react'
import Header from "./Header";

const Login = () => {
  const [isSignForm, setisSignForm] = useState(true)
  const toggleSingnInButton = () => {
    setisSignForm(!isSignForm)
    console.log("btn clicked",isSignForm)
  }
  return (
    <div>
      <div>
      <Header/>
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/IN-en-20251110-TRIFECTA-perspective_46e74acc-70aa-4691-988a-dbcf958149d1_large.jpg" alt="JioLogo" />
      </div>
      </div>
      <form className="absolute bg-black/80 w-3/12 mx-auto right-0 left-0 my-36 text-white p-12 rounded-lg">
        <h1 className="font-bold text-2xl py-4 my-2 text-white">{isSignForm ? "Sign In" : "Sign Up"}</h1>
        <input type="text" placeholder = "Email address" className="p-4 my-4 w-full bg-gray-700"/>
        { !isSignForm && <input 
        type="text" placeholder = "Full Name" className="p-4 my-4 w-full bg-gray-700"/>
        }
        
        <input type="password" placeholder = "Enter password" className="p-4 my-4 w-full bg-gray-700"/>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignForm ? "Sign In" : "Sign Up"}</button>
        <div>
        <p className="py-4 cursor-pointer" onClick={toggleSingnInButton}>{isSignForm ? "New to Netflix? Sign Up now" : "Already registered> Sign In now"}</p>

        </div>
      </form>
    </div>
  )
}

export default Login