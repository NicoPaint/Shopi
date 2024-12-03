//
//React
import { createContext } from "react";

const ShopiContext = createContext();

const ShopiProvider = ({ children }) => {
    return(
        <ShopiContext.Provider>
            {children}
        </ShopiContext.Provider>
    )
}

export { ShopiProvider, ShopiContext }