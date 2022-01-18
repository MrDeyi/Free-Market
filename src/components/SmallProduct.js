import { useContext } from 'react';
import DetailedContext from '../Keep/DetailedView';
import './SmallProduct.css'

function SmallProduct(props){
    const detailedx=useContext(DetailedContext);
    function sendtodetailedview(){
     detailedx.showDetailedview({
         id:props.id,
         title:props.name,
         description:props.description,
         image:props.image,
         contact:props.contact,
         cost:props.cost
     })
    };
    return(
        <li classname='mylist'>

       <div className='SmallProductContainer' onClick={sendtodetailedview}>
           <div className='SmallProductImage'>
            <img className='Smallphoto' src={props.image} alt='yeah'/>
           </div>
          <div className='SmallProductName'>{props.name}</div>
          <div className='SmallfootBar'>
          <div className='SmallProductPrice'>{props.cost}</div>
          <div className='SmallLikeImage'>
            
              <img src='1.png' className='Smalllikeimg'/>  
            
              
          </div>
          </div>
         

        </div>
        
        </li>


    )
   
}
export default SmallProduct;