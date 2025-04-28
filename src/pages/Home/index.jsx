//Este componente es la página principal donde se muestra todos los articulos disponibles en el Ecommerce
//React
import { useContext } from "react"
//Components
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
//Context
import { ShopiContext } from "../../Context"

function Home() {
  
  const {
    filteredProducts,
    setSearchByTitle,
  } = useContext(ShopiContext);

  const renderView = () => {
    if(filteredProducts?.length > 0){
      return(
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center w-full max-w-screen-lg gap-4 p-1">
          {filteredProducts?.map(product => (
            <Card key={product.id} data={product}/>
          ))}
        </div>
      )
    } else {
      return(
        <div className="grid place-items-center w-full max-w-screen-lg gap-4">
          <p className="text-2xl text-center">
            Sorry, there are no results available for this search.
          </p>
        </div>
      )
    }
  }

  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4 font-semibold text-xl">
        <h1>Browse our Latest Products</h1>
      </div>
      <form action="">
        <input 
          type="text"
          placeholder="Search them all..."
          className="w-72 min-[450px]:w-96 p-3 mb-8 rounded-lg border border-black focus:outline-none"
          onChange={(event) => setSearchByTitle(event.target.value)}
        />
      </form>
      {renderView()}
      <ProductDetail />
    </Layout>
  )
}
  
export { Home }