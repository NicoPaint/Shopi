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
        closeProductDetail
    } = useContext(ShopiContext)

    return(
        <aside className={`${isProductoDetailOpen ? "flex" : "hidden"} flex-col fixed right-0 w-[360px] h-[calc(100vh-68px)] border border-r-0 border-black rounded-l-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon 
                        className="size-6 text-black"
                        onClick={() => closeProductDetail()}
                    />
                </div>
            </div>
        </aside>
    )
}

export { ProductDetail };