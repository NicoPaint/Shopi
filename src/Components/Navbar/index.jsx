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

    const { 
        count,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        closeProductDetail,
        setSearchByCategory,
        signOut,
        setSignOut,
        loggedInUser,
        setLoggedInUser
    } = useContext(ShopiContext);

    const toggleShoppingBag = () => {
        if(isCheckoutSideMenuOpen){
            closeCheckoutSideMenu();
        } else {
            closeProductDetail();
            openCheckoutSideMenu();
        }
    }

    const handleSignOut = () => {
        localStorage.setItem("sign-out", JSON.stringify(true));  //Cambia el valor el LS de sign-out
        setLoggedInUser({});
        setSignOut(true);  //Cambia el valor en el estado signOut
    }


    const renderView = () => {
        if(signOut){
            return(
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Sign In
                    </NavLink>
                </li>
            )
        } else {
            return(
                <>
                    <li className="text-black/60">
                        {loggedInUser?.email}
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
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </NavLink>
                    </li>
                </>
            )
        }
    }

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
                        onClick={() => setSearchByCategory('')}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        onClick={() => setSearchByCategory('clothing')}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        onClick={() => setSearchByCategory('electronics')}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jewelry'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        onClick={() => setSearchByCategory('jewel')}
                    >
                        Jewelry
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        onClick={() => setSearchByCategory('others')}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                {renderView()}
                <li 
                    className="flex items-center justify-center"
                    onClick={() => toggleShoppingBag()}
                >
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