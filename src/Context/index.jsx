//Este componente maneja el contexto global de la app.
//React
import { createContext, useState, useEffect } from "react";

const ShopiContext = createContext();

const ShopiProvider = ({ children }) => {

    //Shopping Bag
    const [count, setCount] = useState(0);  //Lleva la cuenta de los elementos en la shopping bag
    const [cartProducts, setCartProducts] = useState([]); //Almacena los productos que se agregan al shopping bag.
    const [orders, setOrders] = useState([]); //Almacena la cantidad de ordenes que se ha hecho en al app.

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); //Determina si se muestra el product detail section o no.
    const openProductDetail = () => setIsProductDetailOpen(true);  //Muestra el product detail
    const closeProductDetail = () => setIsProductDetailOpen(false);  //Esconde el product detail

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({}); //Almacena la información del producto a mostrar en Product Detail section

    //Checkout side menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false); //Determina si se muestra el checkout section o no.
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);  //Muestra el checkout menu
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);  //Esconde el checkout menu

    //Get API products
    const [products, setProducts] = useState(null)  //Este estado va a almacenar los productos que se traen de la API.

    //Get products by Title
    const [searchByTitle, setSearchByTitle] = useState('')  //Almacena lo que los usarios escriban en la barra de búsqueda. Se inicializa como string vacio para que funcione la función de filtrado mas adelante
    
    //Se hace el llamado a la API dentro de un useEffect para hacerlo una sola vez. Dentro esta en modo promesas y async/await
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data));

        /* const fetchProducts = async () => {
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await response.json();

            setProducts(data)
        }

        fetchProducts(); */
    }, [])

    const filteredProducts = products?.filter(product => product.title.toLowerCase().includes(searchByTitle?.toLowerCase())); //Array de productos filtrados por titulo. Sino se busca nada, se devuelve toda la lista porque searchByTitle es un string vacio.

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
            orders,
            setOrders,
            products,
            setProducts,
            searchByTitle,
            setSearchByTitle,
            filteredProducts
        }}>
            {children}
        </ShopiContext.Provider>
    )
}

export { ShopiProvider, ShopiContext }