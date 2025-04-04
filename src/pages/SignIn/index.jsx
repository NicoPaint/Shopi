//Este componente es la página para iniciar sesión en el Ecommerce
//React
import { useRef, useState, useContext } from "react"
import { Link } from "react-router-dom";
//Components
import { Layout } from "../../Components/Layout"
//Context
import { ShopiContext } from "../../Context"
//Third-party
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function SingIn() {

    const {
      account,
      setAccount,
      signOut,
      setSignOut
    } = useContext(ShopiContext);

    const [isSignUp, setIsSignUp] = useState(false);

    const signInForm = useRef(null);
    const LogInForm = useRef(null);

    const handleSignIn = () => {
      localStorage.setItem("sign-out", JSON.stringify(false));  //Cambia el valor el LS de sign-out
      setSignOut(false);  //Cambia el valor en el estado signOut
    }

    const renderView = () => {
      if(!isSignUp){
        return(
          <div className="px-10 py-5 shadow-xl rounded">
            <div className="py-4">
              <h1 className="text-2xl font-bold">Sign In</h1>
              <p className="text-sm">Good to see you again</p>
            </div>
            <form className="flex flex-col gap-3">
              <input type="email" className="w-80 px-2 py-1 border-black border-[1px] rounded outline-orange-500 hover:border-orange-500" placeholder="Email"/>
              <input type="password" className="w-80 px-2 py-1 border-black border-[1px] rounded outline-orange-500 hover:border-orange-500" placeholder="Password"/>
              <a href="">
                <span className="text-sm font-semibold text-black hover:text-orange-500">Forgot your password?</span>
              </a>
              <div className="flex flex-col gap-3 items-center mt-4">
                <Link to='/'>
                  <button 
                    type="button"
                    className="w-60 px-2 py-1 text-white bg-black border-2 border-transparent rounded hover:bg-orange-500"
                    onClick={handleSignIn}
                  >
                    Sign In
                  </button>
                </Link>
                <div className="flex items-center gap-2">
                  <hr className="w-32"/>
                  <span>or</span>
                  <hr className="w-32"/>
                </div>
                <button 
                  type="button" 
                  className="w-60 px-2 py-1 border-black border-2 rounded hover:border-orange-500 hover:text-orange-500"
                  onClick={() => setIsSignUp(true)}
                >
                    Create your Account
                </button>
              </div>
            </form>
          </div>
        )
      } else {
        return(
          <div className="px-10 py-5 relative shadow-xl rounded">
              <ChevronLeftIcon className="absolute size-8 top-3 left-1 cursor-pointer hover:text-orange-500" onClick={() => setIsSignUp(false)}/>
              <div className="py-4">
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-sm">Please fill out the following information:</p>
              </div>
              <form className="flex flex-col">
                <label htmlFor="name" className="font-bold text-sm">Your name:</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  className="w-80 px-2 py-1 mb-2 border-black border-[1px] rounded outline-orange-500 hover:border-orange-500"
                  placeholder="Name"
                />
                <label htmlFor="email" className="font-bold text-sm">Your email:</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  className="w-80 px-2 py-1 mb-2 border-black border-[1px] rounded outline-orange-500 hover:border-orange-500"
                  placeholder="Email"
                />
                <label htmlFor="password" className="font-bold text-sm">Your password:</label>
                <input 
                  type="password"
                  id="password"
                  name="password"
                  className="w-80 px-2 py-1 mb-8 border-black border-[1px] rounded outline-orange-500 hover:border-orange-500"
                  placeholder="Password"
                />
                <button 
                  type="button" 
                  className="w-60 px-2 py-1 mb-1 mx-auto text-white bg-black border-2 border-transparent rounded hover:bg-orange-500"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign Up
                </button>
              </form>
            </div>
        )
      }
    }


    return (
      <Layout>
        <div className="grid place-content-center h-[calc(100vh-68px)]">
          {renderView()}
        </div>
      </Layout>
    )
  }
  
export { SingIn }