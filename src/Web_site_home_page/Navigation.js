import { useContext } from 'react';
import DetailedContext from '../Keep/DetailedView';
import './Navigation.css'

function Navigation(){
    const detailedg=useContext(DetailedContext);
    return(
        <header className='header'>
        <div className='logo'>FREE-MARKET</div>
        <div className='search'> <input type='text' placeholder='Search...' onChange={(event)=>{detailedg.getValue(event.target.value)}}/></div>
          <nav className='nav'>
              <ul className='ul'>
                  <li>HOME</li>
                  <li>WORK</li>
                  <li>SERVICES</li>
                  <li>ABOUT US</li>
                  <li>CONTACT</li>
              </ul>
          </nav>
        </header>
    )
};
export default Navigation;