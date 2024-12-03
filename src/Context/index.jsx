//Este componente maneja el contexto global de la app.
//React
import { createContext, useState } from "react";

const ShopiContext = createContext();

const ShopiProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    return(
        <ShopiContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShopiContext.Provider>
    )
}

export { ShopiProvider, ShopiContext }