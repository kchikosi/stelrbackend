import * as React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TopNav from '../top-nav/top-nav.tsx'
import BottomNav from '../bottom-nav/bottom-nav.tsx'
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth.tsx";

interface LoginUser {
  username: string;
  password: string;
  isAuthenticated: boolean;
}

export default function Login() {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const [loginUser, setLoginUser] = React.useState<LoginUser>({
    username: "",
    password: "",
    isAuthenticated: false,
  });

  const auth = useAuth();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginUser({ ...loginUser, [event.target.id]: event.target.value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("login()  >> handlesubmit");
    event.preventDefault();
    auth.signin(loginUser, () => {
      navigate(from, {replace: true});
    });
  }

  return (
    <>
      <TopNav />
      <Form id="login-from" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username" onChange={handleChange}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password" onChange={handleChange}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" autoComplete="on" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Sign up for email notifications" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button type="button" onClick={() => { navigate(-1) }}>Cancel</Button>
      </Form>
      <BottomNav />
    </>
  );
}