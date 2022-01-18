import { useContext } from 'react';
import DetailedContext from '../Keep/DetailedView';
import './Product.css'

function Product(props){
    const detailedy=useContext(DetailedContext);

    return(
        <div className='Container'>
           <div className='ProductImage'>
            <img className='photo' src={detailedy.detailed.image}/>
           </div>
          <div className='ProductName'><h2>{detailedy.detailed.title}</h2></div>
          <div className='footBar'>
          <div className='ProductPrice'>{detailedy.detailed.cost}</div>
          <div className='LikeImage'>
              <img src='1.png' className='likeimg'/> 
          </div>
          </div>   
          <div className='descriptionBar'>
            <p>
               {detailedy.detailed.description} 
            </p>
          </div>

          <div className='contact'><p>Contact: {detailedy.detailed.contact}</p></div>
          
         

        </div>
         )
   
}
export default Product;