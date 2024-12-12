//Este componente es la ventana que se abre cada vez que alguien da clic a un producto para saber mas sobre el. La ventana en detalle de un producto
//React
import { useContext } from "react";
//Third-party components
import { XMarkIcon } from "@heroicons/react/24/outline";
//Context
import { ShopiContext } from "../../Context";

const ProductDetail = () => {

    const {
        isProductoDetailOpen,
        closeProductDetail,
        productToShow
    } = useContext(ShopiContext);

    return(
        <aside className={`${isProductoDetailOpen ? "flex" : "hidden"} flex-col fixed right-0 w-[360px] h-[calc(100vh-68px)] border border-r-0 border-black rounded-l-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon 
                        className="size-6 text-black cursor-pointer"
                        onClick={() => closeProductDetail()}
                    />
                </div>
            </div>
            <figure className="flex justify-center items-center h-60 px-6">
                <img className="w-full h-full object-contain rounded-lg" src={productToShow.image} alt={productToShow.title} />
            </figure>
            <p className="flex flex-col p-6 gap-2">
                <span className="font-semibold mb-3 text-2xl">${productToShow.price}</span>
                <span className="font-medium text-md">{productToShow.title}</span>
                <span className="h-60 font-light text-sm overflow-scroll">{productToShow.description}</span>
            </p>
        </aside>
    )
}

export { ProductDetail };