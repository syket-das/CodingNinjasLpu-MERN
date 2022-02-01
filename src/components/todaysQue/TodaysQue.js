import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const TodaysQue = () => {
  const [que, setQue] = React.useState('Question');
  const [code, setCode] = React.useState(null);

  // const handleQueChange = (editor, data, value) => {
  //   setCode(value);
  // };
  const handleCodeChange = (editor, data, value) => {
    setCode(value);
  };

  const codeSubmit = () => {
    console.log(code);
  };

  return (
    <Container className="my-3">
      <h1 className="text-center">Todays Question</h1>
      <Row>
        <Col md={6} sm={12}>
          <Container className="m-2">
            <CodeMirror
              value={que}
              options={{
                mode: 'code',
                theme: 'default',
                lineNumbers: true,
              }}
            />
          </Container>
        </Col>
        <Col md={6} sm={12}>
          <Container className="m-2">
            <CodeMirror
              value={code}
              options={{
                mode: 'xml',
                theme: 'material',
                lineNumbers: true,
              }}
              onBeforeChange={(editor, data, value) => {
                setCode(value);
              }}
              onChange={(editor, data, value) => {
                handleCodeChange(editor, data, value);
              }}
            />
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12}>
          <Container className="m-2 ">
            <Button onClick={codeSubmit}>Submit Your Code</Button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default TodaysQue;
