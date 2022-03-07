import { useContext } from 'react';
import DetailedContext from '../Keep/DetailedView';
import './Navigation.css'
import {Navbar,Container,Nav,NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function Navigation(){
    const detailedg=useContext(DetailedContext);
    return(



<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">FREE-MARKET</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Form inline>
          <FormControl type="text" placeholder="Search" classname="mr-sm-2" onChange={(event)=>{detailedg.getValue(event.target.value)}}/>
          
      </Form>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">ABOUT US</Nav.Link>
        <NavDropdown title="Category" id="basic-nav-dropdown">
          <NavDropdown.Item  onClick={()=>detailedg.filterResult("fashion")}>Fashion</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>detailedg.filterResult("electronics")}>Electronics</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>detailedg.filterResult("furniture")}>Furniture</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={()=>detailedg.filterResult("all")}>ALL</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/sell">SELL</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>



       /* <header className='header'>
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
        </header>*/
    )
};
export default Navigation;