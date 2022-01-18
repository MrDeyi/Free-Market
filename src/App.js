import { useState } from 'react';
import './App.css';
import Addstock from './components/addStock.js';
import Product from './components/Product';
import HomePage from './Web_site_home_page/homepage';

function App() {
 
  
  return (
    <div className="App">
     
     <HomePage/>
      
    </div>
  );
}
///**/
/*
function App() {
 
  const [count, setcount] = useState(0);
  const [firstnum, setfirstnum] = useState(5);
  const [secondnum, setsecondnum] =useState(5);
  const [answer , setanswer] = useState(10);
  const increment=() =>{
    setcount(count + 1);
  }
  const handle_clear_add = () =>{
    setcount(0)
  }
  const display_clear_add= count>0;
  const get1=(event) =>{
    setfirstnum(event.target.value);
  }
  const get2=(event)=>{
    setsecondnum(event.target.value);
  }
  const getasnwer=()=>{
    setanswer(parseInt(firstnum)+parseInt(secondnum));
  }
  return (
    <div className="App">
     <h2><Addstock answer={count} fun={increment} num1={firstnum} num2={secondnum} funget1={get1} funget2={get2} num3={answer} funanswer={getasnwer} funclear={handle_clear_add} condition1={display_clear_add}/></h2>
     <Product/>
      
    </div>
  );
}
 */
export default App;
