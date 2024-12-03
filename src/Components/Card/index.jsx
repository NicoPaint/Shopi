//Este componente es la card donde se va a mostrar la información de los productos
//React
import { useContext } from "react";
//Context
import { ShopiContext } from "../../Context";


const Card = ({ data }) => {

    const {
        count,
        setCount
    } = useContext(ShopiContext);

    return(
        <div className="w-56 h-60 bg-white cursor-pointer rounded-lg">
            <figure className="relative w-full h-4/5 mb-2">
                <span className="absolute bottom-0 left-0 m-2 px-3 py-0.5 text-xs text-black bg-white/60 rounded-lg">{data.category}</span>
                <img className="w-full h-full object-contain rounded-lg" src={data.image} alt={data.title} />
                <div 
                    className="flex justify-center items-center absolute top-0 right-0 w-6 h-6 m-2 p-1 bg-white rounded-full"
                    onClick={() => setCount(count + 1)}
                >
                    +
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