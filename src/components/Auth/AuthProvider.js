import { createContext, useEffect, useState } from "react";
import Axios from '../../api/api';
import ReactNotifications from "../Notifications/ReactNotifications";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    useEffect(() => {
        try {
            localStorage.setItem('user', JSON.stringify(user));
        } catch (err) {
            localStorage.removeItem('user');
            console.log(err)
        }
    }, [user]);

    const contextValue = {
        user,
        login(params) {
            setUser(params);
        },
        async logout() {
            try {
                await Axios(user.access_token).post('/logout');
                localStorage.removeItem('user');
                setUser(null);
            } catch (err) {
                console.log(err);
                ReactNotifications(
                    'Error',
                    'Hubo un error interno por favor intenta nuevamente',
                    'danger'
                );
            }
        },
        isLogged() {
            return !!user;
        }
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;