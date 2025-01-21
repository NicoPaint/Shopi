//Este componente es la card que aparece en el Checkout Side menu cada vez que se agrega un producto al shopping bag.
//Third-party components
import { XMarkIcon } from "@heroicons/react/24/outline";

const OrderCard = ({ title, imageURL, price }) => {
    return(
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center w-4/6 gap-2">
                <figure className="w-1/4 h-20">
                    <img className="w-full h-full object-contain rounded-lg" src={imageURL} alt={title} />
                </figure>
                <p className="w-3/4 text-sm font-light truncate">{title}</p>
            </div>
            <div className="flex items-center justify-end w-2/6 gap-2">
                <p className="text-lg font-semibold">${price}</p>
                <XMarkIcon 
                        className="size-6 text-black cursor-pointer"
                        onClick={() => {}}
                />
            </div>
        </div>
    )
}

export { OrderCard };