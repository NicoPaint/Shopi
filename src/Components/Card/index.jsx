//Este componente es la card donde se va a mostrar la información de los productos
//React
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//Third-party Components
import { PlusCircleIcon, CheckIcon } from "@heroicons/react/24/outline";
//Context
import { ShopiContext } from "../../Context";


const Card = ({ data }) => {

    const {
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        signOut
    } = useContext(ShopiContext);

    let navigate = useNavigate();

    //esta funcion abre el product detail section y guarda la información del producto cada vez que dan click a una card.
    const showProduct = (ProductDetail) => {

        if(!signOut){
            openProductDetail();
            closeCheckoutSideMenu();
            setProductToShow(ProductDetail);
        } else{
            navigate('/sign-in');
        }
    }

    //esta función abre el checkout side menu, suma uno al contador del shopping bag y guarda la informacion del producto que usuario va a comprar cada vez que el dan click al icono de mas + en la card. Se agregab el finalPrice para poder calcular el precio total de la orden.
    const addProductsToBag = (event, productData) => {

        if(!signOut){
            event.stopPropagation();
            setCount(count + 1);
            setCartProducts([...cartProducts, { productData, finalPrice: productData.price }]);
            openCheckoutSideMenu();
            closeProductDetail();
        } else{
            navigate('/sign-in');
        }
    }

    //esta funcion cambia el icono de la esquina superior derecha de la card dependiendo si el producto fue agregado a la bolsa o no
    const renderIcon = (id) => {

        const isInTheBag = cartProducts.some(product => product.productData.id === id);  //se hace la validación si el producto ya esta en la bolsa o no

        //si no, se muestra el icono de + para agregar que tiene la funcion aplicada. Si está, se cambia al icono de check para mostrar que ya fue agregado.
        if(isInTheBag){
            return(
                <div 
                    className="flex justify-center items-center absolute top-0 right-0 size-8 m-2 p-1 bg-black text-white rounded-full"
                    onClick={(event) => event.stopPropagation()}
                >
                    <CheckIcon />
                </div>
            )
        } else {
            return(
                <div 
                    className="flex justify-center items-center absolute top-0 right-0 size-8 m-2 p-1 bg-white rounded-full"
                    onClick={(event) => addProductsToBag(event, data)}
                >
                    <PlusCircleIcon />
                </div>
            )
        }
    }

    return(
        <div 
            className="w-36 h-44 min-[500px]:w-56 min-[500px]:h-60 bg-white cursor-pointer rounded-lg"
            onClick={() => showProduct(data)}
        >
            <figure className="relative w-full h-4/5 mb-2">
                <span className="absolute bottom-0 left-0 m-2 px-3 py-0.5 text-xs text-black bg-white/60 rounded-lg">{data.category}</span>
                <img className="w-full h-full object-contain rounded-lg" src={data.image} alt={data.title} />
                {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between items-center mx-2">
                <span className="w-3/4 text-sm font-light truncate">{data.title}</span>
                <span className="text-lg font-medium">${data.price}</span>
            </p>
        </div>
    )
}

export { Card };