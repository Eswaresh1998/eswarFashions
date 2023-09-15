import ProductCard from "./ProductCard";
import Data from "./Data";

const Body =() =>
{
    return(
        <div className="Product-container">
            {
              Data.map(product =><ProductCard resData={product}/>)
            }
        </div>
    );

}

export default Body;