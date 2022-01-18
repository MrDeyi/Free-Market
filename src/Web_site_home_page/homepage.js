import { useContext, useState } from 'react';
import Categoryx from '../components/Category';
import Categorylist from '../components/categorylist';
import Product from '../components/Product';
import ProductList from '../components/ProductList';
import SmallProduct from '../components/SmallProduct';
import DetailedContext from '../Keep/DetailedView';
import './homepage.css'
import Navigation from './Navigation';



    const CategoryData=[
        {
            id:'01',
            categ:'all',
            photo:'inone.jpg'
        },
        {
            id:'02',
            categ:'fashion',
            photo:'jean_jacket.png'
        },
        {
            id:'03',
            categ:'electronics',
            photo:'Hisense.jpg'
        },
        {
            id:'04',
            categ:'furniture',
            photo:'completebed.jpg'
        }

    ]
   

function HomePage(){
    const detailedcat=useContext(DetailedContext);
   

    return(
        <div className='HomePageContainer'>
           <Navigation/>
          
         
         <div className='mainview'>
            <Product/>
            <div className='scrollnCat'>

            <div className='forScroll'>
             <ProductList MyDatabase={detailedcat.fashions}/>
            </div>

              <div className='cat'>
                  <Categorylist categData={CategoryData} />
              </div>
            </div>
           
         </div>       

        </div>
        


    )
   
}
export default HomePage;