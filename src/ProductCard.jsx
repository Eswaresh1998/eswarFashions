


const ProductCard =(props)=>{
  const { resData } = props;
 
    return(
     
      <div className='Product-card'>
        <img  className='Product-Image' src={resData.image.src} alt="" />
         <div className='Info-Page'>
            <div className='meta'>
             <h5>{resData.product.title}</h5>
             <p>price:{resData.price.amount}</p>
             </div>
             <div className='sizes'>
                 <button className='size-name'>S</button>
                 <button className='size-name'>L</button>
                 <button className='size-name'>XL</button>
                 <button className='size-name'>XXL</button>
             </div>
             
         </div>
      </div>
    )
}

export default ProductCard;