import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

interface AuthContextType {
    user: any;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

interface LoginUser {
    username: string;
    pasword: string;
    isAuthenticated: boolean;
}

const AuthContext = React.createContext<AuthContextType>(null!);

function useAuth() {
    return React.useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    let [user, setUser] = React.useState<LogiUser>({
        username: '',
        pasword: '',
        isAuthenticated: false,
    });

    let signin = (user: LoginUser, callback: VoidFunction) => {
        return (() => {
            user.isAuthenticated = true;
            setUser(user);
            setTimeout(callback, 100); //delay
        });
    };

    let signout = (callback: VoidFunction) => {
        return (() => {
            setUser(null);
            setTimeout(callback, 100);
        });
    }
    let value = { user, signin, signout };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function AuthStatus() {
    const auth = React.useContext(AuthContext);
    const navigate = useNavigate();

    if (auth?.user) {
        return <p>You are not logged in</p>;
    } else {
        return
        <div>
            <p> You are logged in</p>
            <Button
                onClick={auth.signout(() => navigate("/"))}
            >Sign Out</Button>
        </div>
    }
}

// Redirect them to the /login page if not authorized
export function RequireAuth({children}:{children:JSX.Element}){
    const auth = useAuth();
    if (auth?.user) {        
        return <Navigate to="/login" /> ;
    }

}