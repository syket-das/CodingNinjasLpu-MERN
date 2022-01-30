import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const ContactPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <Container className="h80 mt-4">
      <h1 className="text-center text-bold">Contact Us</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="your name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Query</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;
