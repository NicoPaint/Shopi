//React
import { useRoutes, BrowserRouter } from 'react-router-dom'
//Pages
import { Home } from '../Home/Index'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SingIn } from '../SignIn'
import { NotFound } from '../NotFound'
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
    //BrowserRouter determina que elemento mostrar según la ruta en la URL
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
