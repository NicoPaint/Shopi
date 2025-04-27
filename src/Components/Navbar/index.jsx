//Este componente es el NavBar dew la aplicación y va a manejar el cambio de las páginas
//React
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
//Third-party Components
import { ShoppingBagIcon, Bars4Icon } from "@heroicons/react/24/solid";
//Context
import { ShopiContext } from "../../Context";

const NavBar = () => {
    const activeStyle = 'underline underline-offset-4';

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        updateLoggedUser,
        setOrders
    } = useContext(ShopiContext);

    const toggleShoppingBag = () => {
        if(isCheckoutSideMenuOpen){
            closeCheckoutSideMenu();
        } else {
            closeProductDetail();
            setIsMobileMenuOpen(false);
            openCheckoutSideMenu();
        }
    }

    const toggleMobileMenu = () => {
        if(isMobileMenuOpen){
            setIsMobileMenuOpen(false);
        } else {
            closeProductDetail();
            closeCheckoutSideMenu();
            setIsMobileMenuOpen(true);
        }
    }

    const handleSignOut = () => {
        localStorage.setItem("sign-out", JSON.stringify(true));  //Cambia el valor el LS de sign-out
        updateLoggedUser({});
        setOrders([]);
        setSignOut(true);  //Cambia el valor en el estado signOut
    }


    const renderView = () => {
        if(signOut){
            return(
                <li className="pt-7 md:pt-0">
                    <NavLink 
                        to='/sign-in'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        onClick={() => isMobileMenuOpen(false)}
                    >
                        Sign In
                    </NavLink>
                </li>
            )
        } else {
            return(
                <>
                    <li className="md:max-w-24 md:min-w-8 pt-7 md:pt-0 text-black/60 overflow-hidden text-ellipsis">
                        {loggedInUser?.email}
                    </li>
                    <li>
                        <NavLink 
                            to='/my-orders'
                            className={({isActive}) => isActive ? activeStyle : undefined}
                            onClick={() => isMobileMenuOpen(false)}
                        >
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/my-account'
                            className={({isActive}) => isActive ? activeStyle : undefined}
                            onClick={() => isMobileMenuOpen(false)}
                        >
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/sign-in'
                            className={({isActive}) => isActive ? activeStyle : undefined}
                            onClick={() => {
                                handleSignOut();
                                isMobileMenuOpen(false)
                            }}
                        >
                            Sign Out
                        </NavLink>
                    </li>
                </>
            )
        }
    }

    return(
        <>
            <nav  className="hidden md:flex justify-between items-center gap-5 w-full py-5 px-8 text-sm font-light">
                <ul className="flex items-center gap-3">
                    <li className="font-semibold text-lg">
                        <NavLink 
                            to='/'
                            onClick={() => setSearchByCategory('')}
                        >
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
            <nav className="flex md:hidden justify-between items-center gap-3 w-full py-5 px-8 text-sm font-light">
                <ul className="flex items-center justify-between w-full gap-3">
                    <li 
                        className="flex items-center justify-center"
                        onClick={() => toggleMobileMenu()}
                    >
                        <Bars4Icon className="size-5 text-black"/>
                    </li>
                    <li className="font-semibold text-lg">
                        <NavLink 
                            to='/'
                            onClick={() => setSearchByCategory('')}
                        >
                            Shopi
                        </NavLink>
                    </li>
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
                { isMobileMenuOpen && (
                    <ul className="flex flex-col absolute left-0 right-0 bottom-0 top-[68px] z-10 px-8 gap-3 bg-white">
                        <li>
                        <NavLink 
                            to='/'
                            className={({isActive}) => isActive ? activeStyle : undefined}
                            onClick={() => {
                                setSearchByCategory('');
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            All
                        </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/clothes'
                                className={({isActive}) => isActive ? activeStyle : undefined}
                                onClick={() => {
                                    setSearchByCategory('clothing');
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Clothes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/electronics'
                                className={({isActive}) => isActive ? activeStyle : undefined}
                                onClick={() => {
                                    setSearchByCategory('electronics');
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Electronics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/jewelry'
                                className={({isActive}) => isActive ? activeStyle : undefined}
                                onClick={() => {
                                    setSearchByCategory('jewel');
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Jewelry
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/others'
                                className={({isActive}) => isActive ? activeStyle : undefined}
                                onClick={() => {
                                    setSearchByCategory('others');
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Others
                            </NavLink>
                        </li>
                        {renderView()}
                    </ul>
                )}
            </nav>
        </>
    )
}

export { NavBar };