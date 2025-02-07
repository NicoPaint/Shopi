//Este componente es la página para mostrar el resumen de los articulos que el cliente tiene en el carrito
//React
import { useContext } from "react"
//Components
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard";
//Context
import { ShopiContext } from "../../Context"

function MyOrder() {

  const {
    order,
  } = useContext(ShopiContext);

  return (
    <Layout>
      MyOrder
      <div className="flex flex-col w-80">
          {/* Aca se inserta el order card al check side menu cada vez que el usuario agrega un producto al bag con el boton de mas */}
          {order?.slice(-1)[0]?.products.map(product => (
              <OrderCard
                  key={product.productData.id}
                  productData={product.productData}
                  finalPrice={product.finalPrice}
              />
          ))}
      </div>
      <p className="flex items-center gap-1 mb-16">
          <span className="font-light">Total:</span>
          <span className="font-medium text-xl">${order[order.length - 1].totalPrice.toFixed(2)}</span>
      </p>
    </Layout>
  )
}
  
export { MyOrder }