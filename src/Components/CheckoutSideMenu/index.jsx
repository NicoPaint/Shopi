//Este componente es la ventana que se abre cada vez que alguien da clic al shopping bag. La ventana de los productos listos para comprar.
//React
import { useContext } from "react";
//Third-party components
import { XMarkIcon } from "@heroicons/react/24/outline";
//Context
import { ShopiContext } from "../../Context";

const CheckoutSideMenu = () => {

    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        
    } = useContext(ShopiContext);

    return(
        <aside className={`${isCheckoutSideMenuOpen ? "flex" : "hidden"} flex-col fixed top-[68px] right-0 w-[360px] h-[calc(100vh-68px)] border border-r-0 border-black rounded-l-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon 
                        className="size-6 text-black cursor-pointer"
                        onClick={() => closeCheckoutSideMenu()}
                    />
                </div>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu };

