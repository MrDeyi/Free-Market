import './ProductList.css'
import SmallProduct from './SmallProduct';

function ProductList(props){
    return(
            

           <ul className='biglist'>
           
           {props.MyDatabase.map(data => <SmallProduct
              image={data.image}
              key={data.id} 
              name={data.name}
              cost={data.cost}
              id={data.id}
              description={data.description}
              contact={data.contact}/>)} 
           
            </ul>

            
           );
}
export default ProductList;