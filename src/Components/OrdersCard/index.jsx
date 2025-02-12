//Este componente es la card que aparece en la vista de my orders, va a representar el resumen de un orden completa.


const OrdersCard = ({date, totalPrice, totalProducts}) => {

    return(
        <div className="flex justify-between items-center h-20 p-2 border border-black rounded-xl">
            <span>{date}</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </div>
    )
}

export { OrdersCard }