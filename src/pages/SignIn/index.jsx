//Este componente es la página para iniciar sesión en el Ecommerce
//React
import { useRef, useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
//Components
import { Layout } from "../../Components/Layout"
//Context
import { ShopiContext } from "../../Context"
//Third-party
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function SingIn() {

    const {
      accounts,
      addNewAccount,
      setSignOut,
      updateLoggedUser,
      renderPopUpMessage,
      setOrders
    } = useContext(ShopiContext);

    const [isSignUp, setIsSignUp] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState('');

    const signInForm = useRef(null);
    const signUpForm = useRef(null);

    let navigate = useNavigate();

    const handleSignIn = () => {
      const formData = new FormData (signInForm.current);

      const userData = {
        email: formData.get("email").toLowerCase(),
        password: formData.get("password"),
      }

      if(!userData.email || !userData.password){
        setPopUpMessage('missing-info');
      } else {
        const userAccount = accounts.some(user => {
          
          if(user.email === userData.email && user.password === userData.password){
            updateLoggedUser(user);
            setOrders(user.orders);
          }

          return user.email === userData.email && user.password === userData.password
        
        });

        if(userAccount){
          localStorage.setItem("sign-out", JSON.stringify(false));  //Cambia el valor el LS de sign-out
          setSignOut(false);  //Cambia el valor en el estado signOut
          navigate("/");  //Lleva al usuario al home si se realiza el signin correctamente
        } else{
          setPopUpMessage("show-error-signin");
        }
      }

    }

    const createNewUser = () => {
      const formData = new FormData(signUpForm.current);

      const newUserData = {
        name: formData.get("name"),
        email: formData.get("email").toLowerCase(),
        password: formData.get("password")
      }

      if(!newUserData.name || !newUserData.email || !newUserData.password){
        setPopUpMessage('missing-info')
      } else {
        setPopUpMessage(addNewAccount(newUserData));
      }
    }

    const renderView = () => {
      if(!isSignUp){
        return(
          <div className="px-5 py-4 min-[375px]:px-10 min-[375px]:py-5 relative shadow-xl rounded border border-black">
            <div className="py-4">
              <h1 className="text-2xl font-bold">Sign In</h1>
              <p className="text-sm">Good to see you again</p>
            </div>
            <form ref={signInForm} className="flex flex-col gap-3">
              <input 
                type="email"
                id="email"
                name="email"
                className="w-60 min-[425px]:w-80 px-2 py-1 border-black border-[1px] rounded outline-orange-500 hover:border-orange-500" 
                placeholder="Email"
              />
              <input 
                type="password"
                id="password" 
                name="password"
                className="w-60 min-[425px]:w-80 px-2 py-1 border-black border-[1px] rounded outline-orange-500 hover:border-orange-500" 
                placeholder="Password"
              />
              <a href="">
                <span className="text-sm font-semibold text-black hover:text-orange-500">Forgot your password?</span>
              </a>
              <div className="flex flex-col gap-3 items-center mt-4">
                  <button 
                    type="button"
                    className="w-60 px-2 py-1 text-white bg-black border-2 border-transparent rounded hover:bg-orange-500"
                    onClick={() => {
                      setPopUpMessage('');
                      handleSignIn();
                    }}
                  >
                    Sign In
                  </button>
                <div className="flex items-center gap-2">
                  <hr className="w-24 min-[425px]:w-32"/>
                  <span>or</span>
                  <hr className="w-24 min-[425px]:w-32"/>
                </div>
                <button 
                  type="button" 
                  className="w-60 px-2 py-1 border-black border-2 rounded hover:border-orange-500 hover:text-orange-500"
                  onClick={() => {
                    setIsSignUp(true);
                    setPopUpMessage('');
                  }}
                >
                    Create your Account
                </button>
              </div>
            </form>
            {renderPopUpMessage(popUpMessage)}
          </div>
        )
      } else {
        return(
          <div className="px-5 py-4 min-[375px]:px-10 min-[375px]:py-5 relative shadow-xl rounded border border-black">
              <ChevronLeftIcon 
                className="absolute size-6 sm:size-8 top-3 left-1 cursor-pointer hover:text-orange-500" 
                onClick={() => {
                  setIsSignUp(false);
                  setPopUpMessage('');
                }}
              />
              <div className="py-4">
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-sm">Please fill out the following information:</p>
              </div>
              <form ref={signUpForm} className="flex flex-col">
                <label htmlFor="name" className="font-bold text-sm">Your name:</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  className="w-60 min-[425px]:w-80 px-2 py-1 mb-2 mx-auto border-black border-[1px] rounded outline-orange-500 hover:border-orange-500"
                  placeholder="Name"
                />
                <label htmlFor="email" className="font-bold text-sm">Your email:</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  className="w-60 min-[425px]:w-80 px-2 py-1 mb-2 mx-auto border-black border-[1px] rounded outline-orange-500 hover:border-orange-500"
                  placeholder="Email"
                />
                <label htmlFor="password" className="font-bold text-sm">Your password:</label>
                <input 
                  type="password"
                  id="password"
                  name="password"
                  className="w-60 min-[425px]:w-80 px-2 py-1 mb-8 mx-auto border-black border-[1px] rounded outline-orange-500 hover:border-orange-500"
                  placeholder="Password"
                />
                <button 
                  type="button" 
                  className="w-60 px-2 py-1 mb-1 mx-auto text-white bg-black border-2 border-transparent rounded hover:bg-orange-500"
                  onClick={createNewUser}
                >
                  Sign Up
                </button>
              </form>
              {renderPopUpMessage(popUpMessage)}
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