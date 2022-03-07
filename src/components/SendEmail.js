import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Card,Button, Row, } from 'react-bootstrap';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4k7bb0y', 'template_1f9o43m', form.current, 'user_jwF2kOxpQT3ujn15YXea3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <Card style={{ width: '18rem' }}>
       <Card.Body>
       <form ref={form} onSubmit={sendEmail}>
           <Row>
           <label>Name</label>
           <input type="text" name="name" />
           </Row>
           <Row>
           <label>Email</label>
           <input type="email" name="email" />
           </Row>
           <Row>
           <label>WhatsApp number</label>
           <input type="number" name="number" />
           </Row>
          <Row>
          <label>Message</label>
          <textarea name="message" value='tyghf f' />
          </Row>
          <Row>
          <Button type="submit" value="Send" >send</Button>
          </Row>
      
    </form>
       </Card.Body>
      </Card>
    
  );
};