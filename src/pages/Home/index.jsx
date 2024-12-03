//Este componente es la página principal donde se muestra todos los articulos disponibles en el Ecommerce
//React
import { useState, useEffect } from "react"
//Components
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"

function Home() {
  const [products, setProducts] = useState(null)  //Este estado va a almacenar los productos que se traen de la API.

  //Se hace el llamado a la API dentro de un useEffect para hacerlo una sola vez. Dentro esta en modo promesas y async/await
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data));

    /* const fetchProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();

      setProducts(data)
    }

    fetchProducts(); */
  }, [])

  return (
    <Layout>
      Home
      <div className="grid grid-cols-4 place-items-center w-full max-w-screen-lg gap-4">
        {products?.map(product => (
          <Card key={product.id} data={product}/>
        ))}
      </div>
    </Layout>
  )
}
  
export { Home }