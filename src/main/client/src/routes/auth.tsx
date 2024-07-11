import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthInfo {
    token: string;
    username: string;
    password: string;
}

interface AuthContextType {
    authInfo: AuthInfo;
    signin: (user: LoginUser, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

interface LoginUser {
    username: string;
    password: string;
    isAuthenticated: boolean;
  }



const AuthContext = React.createContext<AuthContextType>(null!);

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    return React.useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    // const [] = React.useState<LoginUser>({
    //     username: "",
    //     password: "",
    //     isAuthenticated: false,
    //   });

    const [authInfo, setAuthInfo] = React.useState<AuthInfo>({
        token: "",
        username: "",
        password: "",
    });

    const signin = (user: LoginUser, callback: VoidFunction) => {
        return (
            fetch('http://localhost:8080/api/v1/auth/signin',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                }
            ).then(response => {
                return response.json();
            }).then(data => {
                setAuthInfo(data);
                callback();
            }).catch(
                err => console.log(err)
            )
        );
    };

    const signout = (callback: VoidFunction) => {
        return (() => {
            setAuthInfo(null!);
            callback();
        });
    }
    const value = { authInfo, signin, signout };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function AuthStatus() {
    const auth = React.useContext(AuthContext);

    if (!auth?.authInfo.token) {
        return <p>You are not logged in</p>;
    }
    return (
        <div>
            <p> Welcome {auth?.authInfo.username}</p>
        </div>);

}

// Redirect them to the /login page if not authorized
export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useAuth();
    const isAuth = (auth.authInfo.token.length > 0);
    const location = useLocation();

    console.log("auth.requireauth isAuth => "+isAuth); 

    if (!isAuth) {
        return <Navigate to="/login" state={{from : location}} replace />;
    }
    return children;
}