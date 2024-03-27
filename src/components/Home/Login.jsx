import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center my-5">
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <div className="d-flex justify-content-between">
              <Form.Check type="checkbox" label="Check me out" />
              <div>
                <Link>
                  <p>Forgot Password?</p>
                </Link>
              </div>
            </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p className="pt-3">
            Don't have account? <Link to="/register">Create account</Link>{" "}
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
