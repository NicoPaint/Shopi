//Este componente es la página para mostrar todas las ordenes que un cliente ha realizado en el sitio
//React
import { useContext } from "react"
import { Link } from "react-router-dom";
//Components
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard";
//Context
import { ShopiContext } from "../../Context"
//Third-party components
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

function MyOrders() {

    const {
      orders
    } = useContext(ShopiContext);

    return (
      <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        <h1>MyOrders</h1>
      </div>
      <div className="flex flex-col w-80 gap-3">
        {
          orders.map((order, index) => (
            <Link to={`/my-orders/${index + 1}`} key={index + 1}>
              <OrdersCard
                date={order.date}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          ))
        }
      </div>
      </Layout>
    )
  }
  
export { MyOrders }