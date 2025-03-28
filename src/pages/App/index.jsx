//React
import { useRoutes, HashRouter } from 'react-router-dom'
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
    {path: '/', element: <Home />},
    {path: '/Clothes', element: <Home />},
    {path: '/Electronics', element: <Home />},
    {path: '/Jewelry', element: <Home />},
    {path: '/Others', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/sign-in', element: <SingIn />},
    {path: '/*', element: <NotFound />},
  ])

  return routes;
}

function App() {

  return (
    <ShopiProvider>
      {/*HashRouter determina que elemento mostrar según la ruta en la URL. Cambiamos de BrowserRouter a HashRouter porque GitHub pages no soporta client-side routing*/}
      <HashRouter>
        <NavBar />
        <AppRoutes />
        <CheckoutSideMenu />
      </HashRouter>
    </ShopiProvider>
  )
}

export default App
