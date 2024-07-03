import * as React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TopNav from '../top-nav/top-nav.tsx'
import BottomNav from '../bottom-nav/bottom-nav.tsx'

import { useSearchParams } from "react-router-dom";

interface LoginUser {
  username: string;
  password: string;
}

interface Auth {
  isAuthenticated: boolean;
}

export default function Login() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [isAuthenticated, setAuth] = React.useState<Auth>();
  const [loginUser, setLoginUser] = React.useState<LoginUser>();


  function handleChange() {
    //console.log("handle change..")
    const loginUser: LoginUser = {
      username: document.querySelector("#formBasicEmail")?.value,
      password: document.querySelector("#formBasicPassword")?.value,
    };
    //console.log(loginUser.username);
    //console.log(loginUser.password);
    setLoginUser(loginUser);
  }

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(loginUser?.username);
    console.log(loginUser?.password);
    login();
  }

  return (
    <>
      <TopNav />
      <Form onSubmit={handleSubmit} className="login">
        <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleChange}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handleChange}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" autoComplete="on"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Sign up for email notifications" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <BottomNav />
    </>
  );
}