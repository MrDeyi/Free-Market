import { useContext } from 'react';
import { Container,Carousel,Card } from 'react-bootstrap';
import DetailedContext from '../Keep/DetailedView';
import './Product.css'

function Product(props){
    const detailedy=useContext(DetailedContext);
    console.log(detailedy.detailed.images);

    return(
        <Container>
            { Object.keys(props.images).map(item=>{
          return(
            <Carousel.Item>
            <Card.Img variant="top" id='myimg'src={item.Img} />
            </Carousel.Item>
          )
      })}
         

        </Container>
         )
   
}
export default Product;