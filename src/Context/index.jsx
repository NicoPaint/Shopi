//Este componente maneja el contexto global de la app.
//React
import { createContext, useState } from "react";

const ShopiContext = createContext();

const ShopiProvider = ({ children }) => {

    //Shopping Bag
    const [count, setCount] = useState(0);  //Lleva la cuenta de los elementos en la shopping bag
    const [cartProducts, setCartProducts] = useState([]); //Almacena los productos que se agregan al shopping bag.

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); //Determina si se muestra el product detail section o no.
    const openProductDetail = () => setIsProductDetailOpen(true);  //Muestra el product detail
    const closeProductDetail = () => setIsProductDetailOpen(false);  //Esconde el product detail

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});

    //Checkout side menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false); //Determina si se muestra el checkout section o no.
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);  //Muestra el checkout menu
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);  //Esconde el checkout menu

    return(
        <ShopiContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
        }}>
            {children}
        </ShopiContext.Provider>
    )
}

export { ShopiProvider, ShopiContext }