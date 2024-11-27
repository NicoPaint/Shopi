//Este componente es la card donde se va a mostrar la información de los productos

const Card = () => {
    return(
        <div className="w-56 h-60 bg-white cursor-pointer rounded-lg">
            <figure className="relative w-full h-4/5 mb-2">
                <span className="absolute bottom-0 left-0 m-2 px-3 py-0.5 text-xs text-black bg-white/60 rounded-lg">Electronics</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Headphones" />
                <div className="flex justify-center items-center absolute top-0 right-0 w-6 h-6 m-2 p-1 bg-white rounded-full">
                    +
                </div>
            </figure>
            <p className="flex justify-between items-center mx-2">
                <span className="text-sm font-light">Headphones</span>
                <span className="text-lg font-medium">$200</span>
            </p>
        </div>
    )
}

export { Card };