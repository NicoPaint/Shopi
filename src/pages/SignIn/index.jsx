//Este componente es la página para iniciar sesión en el Ecommerce
//Components
import { Layout } from "../../Components/Layout"

function SingIn() {

    return (
      <Layout>
        <div className="grid place-content-center h-[calc(100vh-68px)]">
          <div className="p-5 shadow-xl rounded">
            <div className="py-4">
              <h1 className="text-2xl font-bold">Sign In</h1>
              <p className="text-sm">Good to see you again</p>
            </div>
            <form action="" className="flex flex-col gap-3">
              <input type="email" className="w-80 px-2 py-1 border-black border-[1px] rounded outline-orange-500 hover:border-orange-500" placeholder="Email"/>
              <input type="password" className="w-80 px-2 py-1 border-black border-[1px] rounded outline-orange-500 hover:border-orange-500" placeholder="Password"/>
              <a href="">
                <span className="text-sm font-semibold text-black hover:text-orange-500">Forgot your password?</span>
              </a>
            </form>
            <div className="flex flex-col gap-3 items-center mt-7">
              <button className="w-60 px-2 py-1 text-white bg-black border-2 border-transparent rounded hover:bg-orange-500">Sign In</button>
              <div className="flex items-center gap-2">
                <hr className="w-32"/>
                <span>or</span>
                <hr className="w-32"/>
              </div>
              <button className="w-60 px-2 py-1 border-black border-2 rounded hover:border-orange-500 hover:text-orange-500">Create your Account</button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  
export { SingIn }