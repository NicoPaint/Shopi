//React
import { useRoutes, BrowserRouter } from 'react-router-dom'
//Context
import { ShopiProvider } from '../../Context'
//Pages
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SingIn } from '../SignIn'
import { NotFound } from '../NotFound'
//Components
import { NavBar } from '../../Components/Navbar'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
//Styles
import './App.css'

//Esta función define las rutas de las páginas del proyecto
const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/Shopi', element: <Home />},
    {path: '/Shopi/Clothes', element: <Home />},
    {path: '/Shopi/Electronics', element: <Home />},
    {path: '/Shopi/Jewelry', element: <Home />},
    {path: '/Shopi/Others', element: <Home />},
    {path: '/Shopi/my-account', element: <MyAccount />},
    {path: '/Shopi/my-order', element: <MyOrder />},
    {path: '/Shopi/my-orders', element: <MyOrders />},
    {path: '/Shopi/my-orders/last', element: <MyOrder />},
    {path: '/Shopi/my-orders/:id', element: <MyOrder />},
    {path: '/Shopi/sign-in', element: <SingIn />},
    {path: '/Shopi/*', element: <NotFound />},
  ])

  return routes;
}

function App() {

  return (
    <ShopiProvider>
      {/*BrowserRouter determina que elemento mostrar según la ruta en la URL*/}
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShopiProvider>
  )
}

export default App
