//Este componente es la página para mostrar el resumen de los articulos que el cliente tiene en el carrito
//React
import { useContext } from "react"
import { Link } from "react-router-dom";
//Components
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard";
//Context
import { ShopiContext } from "../../Context"
//Third-party components
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {

  const {
    orders,
  } = useContext(ShopiContext);

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  
  if(index === "last") index = orders?.length;

  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        <Link to={"/my-orders"} className="absolute left-0">
          <ChevronLeftIcon className="w-8 cursor-pointer"/>
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className="flex flex-col w-80">
          {/* Aca se inserta el order card al check side menu cada vez que el usuario agrega un producto al bag con el boton de mas */}
          {orders?.[index - 1]?.products.map(product => (
              <OrderCard
                  key={product.productData.id}
                  productData={product.productData}
                  finalPrice={product.finalPrice}
              />
          ))}
      </div>
      <p className="flex items-center gap-1 mb-16">
          <span className="font-light">Total:</span>
          <span className="font-medium text-xl">${orders[index - 1].totalPrice.toFixed(2)}</span>
      </p>
    </Layout>
  )
}
  
export { MyOrder }