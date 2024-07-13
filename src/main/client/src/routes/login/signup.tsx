import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import TopNav from '../top-nav/top-nav.tsx'
import BottomNav from '../bottom-nav/bottom-nav.tsx'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth.tsx';

interface SignUpInfo {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}
export default function Signup() {

  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const [newUser, setNewUser] = React.useState<SignUpInfo>({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const auth = useAuth();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewUser({ ...newUser, [event.target.id]: event.target.value });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("signup() => submitting..");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("signup() => error..");
      event.preventDefault();
      event.stopPropagation();
    }
    console.log("is form valid => " + form.checkValidity());
    setValidated(true);
    //call signup code
    auth.signup(newUser, () => {
      navigate("/");
    });
  };

  return (
    <>
      <TopNav />
      <Form id="signup-form" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="firstname" onChange={handleChange}>
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Your first name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="lastname" onChange={handleChange}>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Your last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="username" onChange={handleChange}>
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="password" onChange={handleChange}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" autoComplete="on" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="address" onChange={handleChange}>
            <Form.Label>Street</Form.Label>
            <Form.Control type="text" placeholder="Street" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid street address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="city" onChange={handleChange}>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="state" onChange={handleChange}>
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="zip" onChange={handleChange}>
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="phone" onChange={handleChange}>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" placeholder="Phone" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number
          </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
        <Button type="button" onClick={() => { navigate(-1) }}>Cancel</Button>
      </Form>

      <BottomNav />
    </>
  );
}