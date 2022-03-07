import { useContext,useState} from 'react';
import DetailedContext from '../Keep/DetailedView';
import './SmallProduct.css';
import { Card,Button,Carousel,Modal } from 'react-bootstrap';

import { ContactUs } from './SendEmail';


function SmallProduct(props){
    const detailedx=useContext(DetailedContext);
    function sendtodetailedview(){
     detailedx.showDetailedview({
         id:props.id,
         title:props.name,
         description:props.description,
         image1:props.image1,
        image2:props.image2,
        image3:props.image3,
         contact:props.contact,
         cost:props.cost
     })
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
   

    return(
        <li classname='mylist'>

<Card style={{ width: '18rem' }}>
<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.image1}
      alt="First view"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.image2}
      alt="Second view"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.image3}
      alt="Third view"
    />

  </Carousel.Item>
</Carousel>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
     {props.description}
    </Card.Text>
    <Card.Title>
        {props.cost}
    </Card.Title>
    <Button variant="primary" onClick={handleShow}>Contact</Button>
  </Card.Body>
</Card>
        
      
         <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>WE WILL BE IN TOUCH</Modal.Header>
         <Modal.Body>
          <ContactUs/>
         </Modal.Body>
         
       </Modal>
  </li>

    )
   
}
export default SmallProduct;
/*
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
*/