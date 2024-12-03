//React
import { useRoutes, BrowserRouter } from 'react-router-dom'
//Context
import { ShopiProvider } from '../../Context'
//Pages
import { Home } from '../Home/Index'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SingIn } from '../SignIn'
import { NotFound } from '../NotFound'
//Components
import { NavBar } from '../../Components/Navbar'
//Styles
import './App.css'

//Esta función define las rutas de las páginas del proyecto
const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sign-in', element: <SingIn />},
    {path: '/*', element: <NotFound />},
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
      </BrowserRouter>
    </ShopiProvider>
  )
}

export default App
