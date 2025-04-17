//Este componente es la página para mostrar la información de la cuenta de los usuarios
//React
import { useContext, useState, useRef } from "react"
//Components
import { Layout } from "../../Components/Layout"
//Context
import { ShopiContext } from "../../Context"
//Third Party
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyAccount() {

  const {
    loggedInUser,
  } = useContext(ShopiContext);

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const editForm = useRef(null);

  const deleteModal = (
    <div className="grid place-content-center absolute top-0 left-0 right-0 bottom-0 bg-slate-400/50">
      <div className="p-10 bg-white shadow-xl rounded border border-gray-500">
        <span className="font-bold">Are you sure you want to delete your account?</span>
        <div className="flex flex-col justify-center items-center gap-3 pt-5">
          <button 
            className="w-60 px-2 py-1 border-black border-2 rounded hover:border-orange-500 hover:text-orange-500"
            onClick={() => {

            }}
          >
            Yes
          </button>
          <button 
            className="w-60 px-2 py-1 text-white bg-black border-2 border-transparent rounded hover:bg-orange-500"
            onClick={() => setIsDeleting(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )

  const renderEditView = () => {
    if(!isEditing){
      return(
        <div className="grid place-content-center w-80 h-[calc(100vh-68px)]">
          <div className="px-10 py-5 shadow-xl rounded">
            <div className="py-4">
              <h1 className="text-2xl font-bold text-center">My Account</h1>
            </div>
            <div className="flex flex-col h-24 justify-evenly">
              <div className="flex gap-2 text-lg">
                <span className="font-bold">Name:</span>
                <p>{loggedInUser?.name}</p>
              </div>
              <div className="flex gap-2 text-lg">
                <span className="font-bold">Email:</span>
                <p>{loggedInUser?.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center mt-4">
              <button 
                type="button"
                className="w-60 px-2 py-1 text-white bg-black border-2 border-transparent rounded hover:bg-orange-500"
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                Edit your account
              </button>
              <div className="flex items-center gap-2">
                <hr className="w-32"/>
                <span>or</span>
                <hr className="w-32"/>
              </div>
              <button 
                type="button" 
                className="w-60 px-2 py-1 border-black border-2 rounded hover:border-orange-500 hover:text-orange-500"
                onClick={() => {
                  setIsDeleting(true);
                }}
              >
                  Delete your Account
              </button>
            </div>
          </div>
          { isDeleting && deleteModal }
        </div>
      )
    } else {
      return(
        <div className="grid place-content-center w-80 h-[calc(100vh-68px)]">
          <div className="px-10 py-5 relative shadow-xl rounded">
              <ChevronLeftIcon 
                className="absolute size-8 top-3 left-1 cursor-pointer hover:text-orange-500" 
                onClick={() => {
                  setIsEditing(false);
                }}
              />
              <div className="py-4">
                <h1 className="text-2xl font-bold">Edit your account</h1>
                <p className="text-sm">Please fill out the following information:</p>
              </div>
              <form ref={editForm} className="flex flex-col">
                <label htmlFor="name" className="font-bold text-sm">New name:</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  className="w-80 px-2 py-1 mb-2 border-black border-[1px] rounded outline-orange-500 hover:border-orange-500"
                  placeholder="Name"
                />
                <label htmlFor="email" className="font-bold text-sm">New email:</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  className="w-80 px-2 py-1 mb-2 border-black border-[1px] rounded outline-orange-500 hover:border-orange-500"
                  placeholder="Email"
                />
                <label htmlFor="password" className="font-bold text-sm">New password:</label>
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
                  onClick={() => {}}
                >
                  Save your changes
                </button>
              </form>
              
            </div>
        </div>
      )
    }
  }

    return (
      <Layout>
        {renderEditView()}
      </Layout>
    )
  }
  
export { MyAccount }