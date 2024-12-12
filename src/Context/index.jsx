//Este componente maneja el contexto global de la app.
//React
import { createContext, useState } from "react";

const ShopiContext = createContext();

const ShopiProvider = ({ children }) => {

    //Shopping Bag
    const [count, setCount] = useState(0);  //Lleva la cuenta de los elementos en la shopping bag

    //Product Detail - Open/Close
    const [isProductoDetailOpen, setIsProductoDetailOpen] = useState(false); //Determina si se muestra el product detail section o no.
    const openProductDetail = () => setIsProductoDetailOpen(true);  //Muestra el product detail
    const closeProductDetail = () => setIsProductoDetailOpen(false);  //Esconde el product detail

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});

    return(
        <ShopiContext.Provider value={{
            count,
            setCount,
            isProductoDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
        }}>
            {children}
        </ShopiContext.Provider>
    )
}

export { ShopiProvider, ShopiContext }