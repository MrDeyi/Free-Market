import { Card,Button,Carousel,Modal,Form } from 'react-bootstrap';
function Sell(){
    return(
        <div class="container">
        <h1 class="text-center">Sell your product</h1>
        <form action="http://localhost:8080/upload" id="post" method="post" enctype="multipart/form-data">
          <div class="form-group">
            <label for="image1">Upload 3 images:</label>
            <input type="file" name="images" id="" required class="form-control"  multiple/>
          </div>
          
            <div class="form-group">
            <Form.Label>product name</Form.Label>
            <Form.Control type="text" name="name" placeholder="product name" />
            </div>
            <div class="form-group">
            <Form.Label>product price</Form.Label>
            <Form.Control type="text" name="cost" placeholder="R 3433.98" />
            </div>  
            <Form.Group className="mb-3" >
            <Form.Label>Description</Form.Label>
           <Form.Control as="textarea" name="description" rows={4} />
           </Form.Group>
           <div class="form-group">
            <Form.Label>product category</Form.Label>
            <Form.Control type="text" name="category" placeholder="category" />
            </div>  
            <div class="form-group">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="contact" placeholder="email@example.com" />
            </div>  
            <div class="form-group">
                <button class="btn btn-danger btn-block">
                    Upload Files
                </button>
            </div>
      </form>
    </div>
    )
}
export default Sell;