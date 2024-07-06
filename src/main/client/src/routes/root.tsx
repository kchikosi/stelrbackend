import Home from './home-page.tsx'
import * as React from "react";
import '../index.css'
import { authProvider } from './auth.ts';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

interface LoginUser {
  username: string;
  password: string;
}

const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<LoginUser>({
    username: "",
    password: "",});

  const signin = (newUser: LoginUser, callback: VoidFunction) => {
    return authProvider.signin(() => {
      setUser(newUser);
      callback();
    })
  };

  const signout = (callback: VoidFunction) => {
    return authProvider.signout(() => {
      setUser(null!);
      callback();
    });
  }

  const value = {user, signin, signout};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export default function Root() {
  return (
    <>
      <div id="root">
      <AuthStatus/>
        <Home />
      </div>
    </>
  );
}

function AuthStatus() {
  const auth = React.useContext(AuthContext);
  const navigate = useNavigate();
  if (!auth?.user) {
    return <p>You are not logged in.</p>
    
  }
  return (
    <>
     <p> Welcome {auth.user.username}!{''}</p>
    <Button onClick={() => {
      auth.signout(()=> navigate("/"));
    }}>
      Sign Out
    </Button>  
    </>
  );
}

