//Este componente es la ventana que se abre cada vez que alguien da clic a un producto para saber mas sobre el. La ventana en detalle de un producto

const ProductDetail = () => {

    return(
        <aside className="flex flex-col fixed right-0 w-[360px] h-[calc(100vh-68px)] border border-r-0 border-black rounded-l-lg bg-white">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>X</div>
            </div>
        </aside>
    )
}

export { ProductDetail };