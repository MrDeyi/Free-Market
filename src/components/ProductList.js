import { Container, Row,Col } from 'react-bootstrap';
import './ProductList.css'
import SmallProduct from './SmallProduct';

function ProductList(props){
    return(
            
           
           <Container>
           <Row>
            
            {props.MyDatabase.map(data => <Col><SmallProduct
              image1={data.image1}
              image2={data.image2}
              image3={data.image3}
              key={data.id} 
              name={data.name}
              cost={data.cost}
              images={data.images}
              id={data.id}
              description={data.description}
              contact={data.contact}/></Col>)}
            
           </Row>
           
           
            </Container>

            
           );
}
export default ProductList;