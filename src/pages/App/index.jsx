//Pages
import { Home } from '../Home/Index'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SingIn } from '../SignIn'
import { NotFound } from '../NotFound'
//Styles
import './App.css'

function App() {

  return (
    <>
      <div className='bg-red-400'>
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <SingIn />
        <NotFound />
      </div>
    </>
  )
}

export default App
