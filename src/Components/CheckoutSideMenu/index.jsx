//Este componente es la ventana que se abre cada vez que alguien da clic al shopping bag. La ventana de los productos listos para comprar.
//React
import { useContext } from "react";
//Components
import { OrderCard } from "../OrderCard";
//Third-party components
import { XMarkIcon } from "@heroicons/react/24/outline";
//Context
import { ShopiContext } from "../../Context";
//Utils
import { totalPrice } from "../../Utils";

const CheckoutSideMenu = () => {

    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        count,
        setCount,
        cartProducts,
        setCartProducts
    } = useContext(ShopiContext);

    const handelDelete = (id) => {
        setCount(count - 1);

        const filteredBagProducts = cartProducts.filter(product => product.id != id);
        setCartProducts(filteredBagProducts);
    }

    return(
        <aside className={`${isCheckoutSideMenuOpen ? "flex" : "hidden"} flex-col fixed top-[68px] right-0 w-[360px] h-[calc(100vh-68px)] border border-r-0 border-black rounded-l-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon 
                        className="size-6 text-black cursor-pointer"
                        onClick={() => closeCheckoutSideMenu()}
                    />
                </div>
            </div>
            <div className="px-6 h-5/6 overflow-scroll">
                {/* Aca se inserta el order card al check side menu cada vez que el usuario agrega un producto al bag con el boton de mas */}
                {cartProducts?.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id} 
                        title={product.title}
                        imageURL={product.image}
                        price={product.price}
                        handelDelete={handelDelete}
                    />
                ))}
            </div>
            <div className="px-6 pt-3">
                <p className="flex justify-end items-center gap-2">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-xl">${totalPrice(cartProducts)}</span>
                </p>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu };

