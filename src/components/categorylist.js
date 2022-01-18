import Categoryx from './Category';
import './ProductList.css'


function Categorylist(props){
    return(
            

           <ul className='biglist'>
           
           {props.categData.map(data => <Categoryx
              categ={data.categ}
              photo={data.photo}
              id={data.id}
              />)} 
           
            </ul>

            
           );
}
export default Categorylist;