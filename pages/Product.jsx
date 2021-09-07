
import Ironwood from  './Ironwood'
import Timberline from './Timberline'
const Product=({newproducts,grillName,products})=>{
  //Rendering the Grill Component based on the seletion
    return ( 
        <>
          {grillName==="Ironwood 650 Pellet Grill"&&<Ironwood newproducts={newproducts} products={products}/>}
          {grillName==="Timberline Features - Tout Content"&& <Timberline newproducts={newproducts} products={products}/>}
        </>
    );
  };

export default Product;