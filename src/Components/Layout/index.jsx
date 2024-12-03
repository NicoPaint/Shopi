//Este componente va a ser el wrapper de cada una de las páginas del proyecto para darle estilos globales a cada una de ellas.

const Layout = ({ children }) => {
    return(
        <div className="flex flex-col items-center">
            {children}
        </div>
    )
}

export { Layout };