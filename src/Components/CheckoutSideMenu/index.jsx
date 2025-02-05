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
        setCartProducts,
        order,
        setOrder
    } = useContext(ShopiContext);

    const handelDelete = (id) => {
        setCount(count - 1);

        const filteredBagProducts = cartProducts.filter(product => product.productData.id != id);
        setCartProducts(filteredBagProducts);
    }

    const handelCheckout = () => {
        const orderToAdd = {
            date: "02.04.2025",
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts),
        }

        setOrder([...order, orderToAdd]);
        console.log(order);
        emptyTheBag();
    }

    const emptyTheBag = () => {
        setCount(0);
        setCartProducts([]);
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
            <div className="px-6 flex-1 overflow-scroll">
                {/* Aca se inserta el order card al check side menu cada vez que el usuario agrega un producto al bag con el boton de mas */}
                {cartProducts?.map(product => (
                    <OrderCard
                        key={product.productData.id}
                        productData={product.productData} 
                        handelDelete={handelDelete}
                    />
                ))}
            </div>
            <div className="flex flex-col justify-between items-center px-6 py-3 gap-2">
                <div className="flex justify-between items-center w-full">
                    <button 
                        className="px-2 py-1 text-red-600 rounded-lg border-[1px] border-red-400 transition hover:bg-red-600 hover:text-white hover:border-transparent "
                        onClick={() => emptyTheBag()}
                    >
                        Empty the bag
                    </button>
                    <p className="flex items-center gap-1">
                        <span className="font-light">Total:</span>
                        <span className="font-medium text-xl">${totalPrice(cartProducts)}</span>
                    </p>
                </div>
                <button 
                    className="w-full py-3 bg-black text-white rounded-lg transition hover:bg-green-500"
                    onClick={handelCheckout}
                >
                    Checkout
                </button>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu };

