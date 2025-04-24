//Este componente es la ventana que se abre cada vez que alguien da clic al shopping bag. La ventana de los productos listos para comprar.
//React
import { useContext } from "react";
import { Link } from "react-router-dom";
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
        setSearchByTitle,
        updateOrders
    } = useContext(ShopiContext);

    const handelDelete = (id) => {
        setCount(count - 1);

        const filteredBagProducts = cartProducts.filter(product => product.productData.id != id);
        setCartProducts(filteredBagProducts);
    }


    //Este funcion actualiza el estado de productos del carrito cada vez que el usuario cambia la cantidad del items en el carrito
    const handelQuantity = (productData, itemQuantity, isMinus) => {
        const finalPrice = (productData.price * itemQuantity).toFixed(2);
        const cartCopy = [...cartProducts];
        const productIndex = cartCopy.findIndex(product => product.productData.id === productData.id);
    
        cartCopy.splice(productIndex, 1, { productData, finalPrice: +finalPrice});  //se agregó el signo + a finalPrice para convertirlo de string a número porque en la copia ese dato se convirtió en string.
        setCartProducts(cartCopy);

        return isMinus ? itemQuantity - 1 : itemQuantity + 1;
    }

    const handelCheckout = () => {
        const orderToAdd = {
            date: "02.04.2025",
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: +totalPrice(cartProducts), //se agregó el signo + a finalPrice para convertirlo de string a número porque en la copia ese dato se convirtió en string.
        }

        updateOrders(orderToAdd);
        emptyTheBag();  //por alguna razón cuando le aplico el Link al boton y se oprime, este borra el cartProduct pero vuelve y agrega el ultimo producto que estaba en el array y no lo borra del checkoutSideMenu. Solo aplicandole este timeout puedo evitar que eso suceda.
        //Ya encontré el problema. Era el useEffect que estaba usando en el componente OrderCard, ya que este renderizaba la primera vez y luego ejecutaba el useEffect y volvia a renderizar el componente. Esto lo hacia muchas veces y terminaba trayendo ese ultimo producto.
        setSearchByTitle('');  //Elimina lo que haya escrito el usuario en el search bar
        closeCheckoutSideMenu();  //cierra el checkout side menu despues de realizar el checkout
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
                        finalPrice={product.finalPrice} 
                        handelDelete={handelDelete}
                        handelQuantity={handelQuantity}
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
                <Link to="/my-orders/last" className="w-full">
                    <button 
                        className="w-full py-3 bg-black text-white rounded-lg transition hover:bg-green-500 disabled:bg-slate-200"
                        onClick={() => {
                            handelCheckout();
                        }}
                        disabled={cartProducts.length === 0}
                    >
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu };

