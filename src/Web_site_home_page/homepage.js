import { useContext, useState } from 'react';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import ProductList from '../components/ProductList';
import AboutUs from '../components/AboutUs';
import { ContactUs } from '../components/SendEmail';
import SmallProduct from '../components/SmallProduct';
import DetailedContext from '../Keep/DetailedView';
import './homepage.css'
import Navigation from './Navigation';
import Sell from '../components/Sell';



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
   ;

function HomePage(){
    const detailedcat=useContext(DetailedContext);
    console.log(detailedcat.detailed);

    return(
        <BrowserRouter>
       
        <div className='HomePageContainer'>
           <Navigation/>
          
           <div className='forScroll'>
           <Routes>
           <Route path='/'exact element={<ProductList MyDatabase={detailedcat.fashions}/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/sell' element={<Sell/>}/>
           </Routes>
            </div>
        </div>
      
        

        
        </BrowserRouter>
        


    )
   
}
export default HomePage;

/*   <div className='forScroll'>
             <ProductList MyDatabase={detailedcat.fashions}/>
            </div> */
/*   <div className='mainview'>
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
         
         
          <div className='forScroll'>
             <ProductList MyDatabase={detailedcat.fashions}/>
            </div>

 */