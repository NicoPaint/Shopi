//Este componente es la card que aparece en el Checkout Side menu cada vez que se agrega un producto al shopping bag.
//React
import { useState, useContext, useEffect } from "react";
//Context
import { ShopiContext } from "../../Context";
//Third-party components
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const OrderCard = ({ productData, finalPrice, handelDelete }) => {
    
    const [itemQuantity, setItemQuantity] = useState(1);  //Se usa este estado local para manejar la cantidad de items en el carrito.

    const {
        cartProducts,
        setCartProducts
     } = useContext(ShopiContext)
    
    const plusOne = () => {
        setItemQuantity(itemQuantity + 1);
    }
    
    const minusOne = () => {
        setItemQuantity(itemQuantity - 1);
    }
    
    const finalItemPrice = (price, quantity) => {
        const finalPrice = price * quantity;
        return finalPrice.toFixed(2);
    }

    //Este funcion actualiza el estado de productos del carrito cada vez que el usuario cambia la cantidad del items en el carrito
    useEffect(() => {
        const finalPrice = finalItemPrice(productData.price, itemQuantity);
        const cartCopy = [...cartProducts];
        const productIndex = cartCopy.findIndex(product => product.productData.id === productData.id);

        cartCopy.splice(productIndex, 1, { productData, finalPrice: +finalPrice});  //se agregó el signo + a finalPrice para convertirlo de string a número porque en la copia ese dato se convirtió en string.
        setCartProducts(cartCopy);
    }, [itemQuantity]);

    let renderXMarkIcon;
    let renderQuantity;

    //Aca se determina si el OrderCard esta en el checkout Side menu o en my orders page para mostrar una cosa o la otra
    if(handelDelete) {
        renderXMarkIcon = <XMarkIcon className="size-6 text-black cursor-pointer" onClick={() => handelDelete(productData.id)}/>
        renderQuantity = 
        <div className="flex items-center gap-3">
            <button 
                className="flex items-center justify-center w-6 h-6 text-black rounded-full border-[1px] border-slate-600 transition hover:bg-black hover:text-white hover:border-transparent disabled:bg-slate-200 disabled:text-white disabled:border-transparent"
                onClick={minusOne}
                disabled={itemQuantity <= 1}
            >
                <MinusIcon className="w-5 h-5"/>
            </button>
            <span>{itemQuantity}</span>
            <button 
                className="flex items-center justify-center w-6 h-6 text-black rounded-full border-[1px] border-slate-600 transition hover:bg-black hover:text-white hover:border-transparent"
                onClick={plusOne}
            >
                <PlusIcon className="w-5 h-5"/>
            </button>
        </div>
    } else {
        renderQuantity = 
        <div className="flex items-center gap-3">
            <span>Quantity:</span>
            <span>{Math.round(finalPrice/productData.price)}</span>
        </div>
    }

    return(
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center w-4/6 gap-2">
                <figure className="w-1/4 h-20">
                    <img className="w-full h-full object-contain rounded-lg" src={productData.image} alt={productData.title} />
                </figure>
                <div className="flex flex-col w-3/4 gap-2">
                    <p className="w-full text-sm font-light truncate">{productData.title}</p>
                    {renderQuantity}
                </div>
            </div>
            <div className="flex items-center justify-end w-2/6 gap-2">
                <p className="text-lg font-semibold">${finalPrice}</p>
                {renderXMarkIcon}
            </div>
        </div>
    )
}

export { OrderCard };