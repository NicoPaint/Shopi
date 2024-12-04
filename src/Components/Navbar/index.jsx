//Este componente es el NavBar dew la aplicación y va a manejar el cambio de las páginas
//React
import { NavLink } from "react-router-dom";
import { useContext } from "react";
//Third-party Components
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
//Context
import { ShopiContext } from "../../Context";

const NavBar = () => {
    const activeStyle = 'underline underline-offset-4';

    const { count } = useContext(ShopiContext);

    return(
        <nav  className="flex justify-between items-center  w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/Clothes'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/Electronics'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/Furniture'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/Toys'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/Others'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    test@123.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <ShoppingBagIcon className="size-5 text-black"/>
                    <div>
                        {count}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export { NavBar };