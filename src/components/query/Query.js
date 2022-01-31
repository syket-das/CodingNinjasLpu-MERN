import React from 'react';
import { Accordion, Button, Container, Form } from 'react-bootstrap';
import './query.scss';

const Query = () => {
  return (
    <Container className="query">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Submit Query</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Query</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button type='submit' className="w-100 btn-block btn-primary">Submit</Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Query;
