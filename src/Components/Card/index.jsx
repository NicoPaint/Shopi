//Este componente es la card donde se va a mostrar la información de los productos
//React
import { useContext } from "react";
//Third-party Components
import { PlusCircleIcon } from "@heroicons/react/24/outline";
//Context
import { ShopiContext } from "../../Context";


const Card = ({ data }) => {

    const {
        count,
        setCount,
        openProductDetail,
        setProductToShow,
        cartProducts,
        setCartProducts,
    } = useContext(ShopiContext);

    //esta funcion abre el product detail section y guarda la información del producto cada vez que dan click a una card.
    const showProduct = (ProductDetail) => {
        openProductDetail();
        setProductToShow(ProductDetail);
    }

    const addProductsToBag = (productData) => {
        setCount(count + 1);
        setCartProducts([...cartProducts, productData]);
        console.log('Cart: ', cartProducts);
    }

    return(
        <div 
            className="w-56 h-60 bg-white cursor-pointer rounded-lg"
            onClick={() => showProduct(data)}
        >
            <figure className="relative w-full h-4/5 mb-2">
                <span className="absolute bottom-0 left-0 m-2 px-3 py-0.5 text-xs text-black bg-white/60 rounded-lg">{data.category}</span>
                <img className="w-full h-full object-contain rounded-lg" src={data.image} alt={data.title} />
                <div 
                    className="flex justify-center items-center absolute top-0 right-0 size-8 m-2 p-1 bg-white rounded-full"
                    onClick={(event) => {
                        event.stopPropagation();
                        addProductsToBag(data);
                    }}
                >
                    <PlusCircleIcon />
                </div>
            </figure>
            <p className="flex justify-between items-center mx-2">
                <span className="w-3/4 text-sm font-light truncate">{data.title}</span>
                <span className="text-lg font-medium">${data.price}</span>
            </p>
        </div>
    )
}

export { Card };