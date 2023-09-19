import ProductCard from "./ProductCard";
import { useState } from "react";
import Data1 from "./Data";
import SearchIcon from "./search-icon.png";
import Shimmer from "./Shimmer";




const Body =() =>
{
    const [Data, setData] = useState(Data1);
    const [searchText, setSearchText] = useState("");
    const [filteredData,setFilteredData] = useState(Data1);

    return Data.length === 0 ?(<Shimmer />):(
        <div className="Body-Container">
        <div className="search-filter-Container">
        <input type="text" class="search-input" value={searchText}placeholder="Search-here" onChange={(e)=>{
           setSearchText(e.target.value);
        }}></input>
        <button type="submit" class="search-button" onClick={()=>{
            const filterdProducts= Data.filter((prod)=>  prod.product.title.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredData(filterdProducts);
        }}
        >
            <img className="search-icon" src={SearchIcon}></img>
        </button>

        <button className='filter  size-name'
        onClick={()=>{
            console.log(Data)
           const filteredData = Data.filter(
                (prod)=> prod.price.amount<=1000
            );
            setData(filteredData);
            console.log(Data)
          
        }}>Under 1000</button>
        </div>
        <div className="Product-container">
            {
             
             filteredData.map(product =><ProductCard key={product.id}resData={product}/>)
            }
        </div>
        </div>
    );

}

export default Body;