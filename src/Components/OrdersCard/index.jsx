//Este componente es la card que aparece en la vista de my orders, va a representar el resumen de un orden completa.
//Thid-party components
import { ChevronRightIcon } from "@heroicons/react/24/solid"


const OrdersCard = ({date, totalPrice, totalProducts}) => {

    return(
        <div className="flex items-center relative h-20 py-2 pl-4 pr-8 border border-black rounded-lg">
            <p className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                    <span className="font-light">{date}</span>
                    <span className="font-light">{totalProducts} Products</span>
                </div>
                <span className="font-bold text-2xl">${totalPrice}</span>
                <ChevronRightIcon className="absolute right-0 w-8 cursor-pointer"/>
            </p>
        </div>
    )
}

export { OrdersCard }