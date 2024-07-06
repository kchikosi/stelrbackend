import * as React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TopNav from '../top-nav/top-nav.tsx'
import BottomNav from '../bottom-nav/bottom-nav.tsx'
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../auth.tsx";

interface Auth {
  isAuthenticated: boolean;
}

interface LoginUser {
  username: string;
  password: string;
}

export default function Login() {
  let [isAuthenticated, setAuth] = React.useState<Auth>();

  const navigate = useNavigate();

  const [loginUser, setLoginUser] = React.useState<LoginUser>({
    username: "",
    password: "",
  });

  let login = () => {
    fetch('http://localhost:8080/api/v1/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginUser)
    })
      .then(response => (auth: Auth) => {
        const jwtToken = response.headers.get('Authorization');
        console.log("JWT token => " + jwtToken);
        if (jwtToken != null) {
          sessionStorage.setItem("jwt", jwtToken);
          auth.isAuthenticated = true;
          setAuth(auth);
        }
      })
      .catch(err => console.log(err))
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginUser({ ...loginUser, [event.target.id]: event.target.value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("username > " + loginUser.username);
    console.log("password > " + loginUser.password);
    login();
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