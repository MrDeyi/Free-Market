import { useContext } from 'react';
import DetailedContext from '../Keep/DetailedView';
import Category from './Category.css'

function Categoryx(props){

    const detailedw=useContext(DetailedContext);
    

    return(
        <div className='categoryContainer' value={props.categ} onClick={()=>detailedw.filterResult(props.categ)}>
            <div className='picture'>
                <img src={props.photo} />
            </div>
            <div className='catname'>
                <h1>{props.categ}</h1>
            </div>
        </div>
    );
};
export default Categoryx;