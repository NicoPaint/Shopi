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

    //Filtered Products
    const [filteredProducts, setFilteredProducts] = useState([])  //Almacena el array de prodcuts filtrados

    //Get products by Title
    const [searchByTitle, setSearchByTitle] = useState('');  //Almacena lo que los usarios escriban en la barra de búsqueda. Se inicializa como string vacio para que funcione la función de filtrado mas adelante

    //Get products by category
    const [searchByCategory, setSearchByCategory] = useState('');  //Almacena los tipos de categorias cada ves que el usuario se mueva entre los diferentes menus o páginas de la app.

    //My account LocalStorage
    const [account, setAccount] = useState([]);  //Este estado almacena la informacion que haya sobre las cuentas en el local storage del navegador

    //Sign Out LocalStorage
    const [signOut, setSignOut] = useState(false);  //Este estado se utiliza para manejar si el usuario esta conectado o no.
    
    //Se hace el llamado a la API dentro de un useEffect para hacerlo una sola vez. Dentro esta en modo promesas y async/await. Tambien se hace inicializa la informacion del local storage (las cuentas y el estado de sign out).
    useEffect(() => {
        //Llamado a la API
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data));

        /* const fetchProducts = async () => {
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await response.json();

            setProducts(data)
        }

        fetchProducts(); */

        //Inicializacion del local Storage para Account y Sign Out
        const initializeLocalStorage = () => {
            const accountInLocalStorage = localStorage.getItem('account');
            const signOutInLocalStorage = localStorage.getItem('sign-out');

            let parsedAccount;
            let parsedSignOut;

            if(!accountInLocalStorage){
                localStorage.setItem('account', JSON.stringify([]));
            } else {
                parsedAccount = JSON.parse(accountInLocalStorage);
                setAccount(parsedAccount);
            }

            if(!signOutInLocalStorage){
                localStorage.setItem("sign-out", JSON.stringify(false));
            } else{
                parsedSignOut = JSON.parse(signOutInLocalStorage);
                setSignOut(parsedSignOut);
            }
        }

        initializeLocalStorage()
    }, [])

    //Estas 2 funciones obtienen el array de productos filtrados segun la condicion (por titulo o por categoria)
    const filterProductsByTitle = (products, searchByTitle) => {
        return products?.filter(product => product.title.toLowerCase().includes(searchByTitle?.toLowerCase()))
    }
    const filterProductsByCategory = (products, searchByCategory) => {
        return products?.filter(product => product.category.toLowerCase().includes(searchByCategory?.toLowerCase()))
    }

    //Como tenemos 2 tipos diferentes de filtrados podemos tener 4 casos diferentes (2x2 = 4), por lo que esta función determina que hacer en cada unos de ellos.
    const filterBy = (searchType, products, searchByTitle, searchByCategory) => {

        //si es por los 2 tipos, primero hace le filtro por categoria y despues por titulo (search bar) y se regresa el resultado
        if(searchType === "BY_TITLE_AND_CATEGORY"){
            return filterProductsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchByTitle?.toLowerCase()));
        } 
        //si es solo por titulo, hace solo el filtrado por titulo y se regresa el resultado
        else if (searchType === "BY_TITLE"){
            return filterProductsByTitle(products, searchByTitle);
        } 
        //si es solo por categoria, hace solo el filtrado por categoria y se regresa el resultado
        else if (searchType === "BY_CATEGORY"){
            return filterProductsByCategory(products, searchByCategory);
        } 
        //si no hace ninguno, se regresa la lista total de productos
        else if (!searchType){
            return products
        }
    }

    //Este useEffect reasigna el valor de los productos filtrados acorde a que tipo de filtrado esta sido utilizado por el usuario (los 4 escenarios posibles), para mostrar el resultado en la vista de home.
    useEffect(() => {
        if(searchByTitle && searchByCategory) setFilteredProducts(filterBy("BY_TITLE_AND_CATEGORY", products, searchByTitle, searchByCategory));
        if(searchByTitle && !searchByCategory) setFilteredProducts(filterBy("BY_TITLE", products, searchByTitle, searchByCategory));
        if(!searchByTitle && searchByCategory) setFilteredProducts(filterBy("BY_CATEGORY", products, searchByTitle, searchByCategory));
        if(!searchByTitle && !searchByCategory) setFilteredProducts(filterBy(null, products, searchByTitle, searchByCategory));
    }, [products, searchByTitle, searchByCategory])

    const addNewAccount = (accountData) => {
        const accountsInLocalStorage = localStorage.getItem("account");
        const accountsArray = JSON.parse(accountsInLocalStorage);

        const doesAccountExist = accountsArray.some(account => account.email === accountData.email);

        if(!doesAccountExist){
            accountsArray.push(accountData);
            localStorage.setItem("account", JSON.stringify(accountsArray));
            setAccount(accountsArray);
            
            return "show-success";
        }

        return "show-error";
    }


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
            filteredProducts,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            addNewAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShopiContext.Provider>
    )
}

export { ShopiProvider, ShopiContext }