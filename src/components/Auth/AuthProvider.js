import { createContext, useEffect, useState } from "react";
import api from "../../api/api";
import ReactNotifications from "../Notifications/ReactNotifications";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    useEffect(() => {
        try {
            localStorage.setItem('user', JSON.stringify(user));
        } catch(err) {
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
            api.interceptors.request.use(
                config => {
                    config.headers.authorization = `Bearer ${user.access_token}`;
                    return config;
                },
                error => {
                    return Promise.reject(error);
                }
            );
            try {
                const resp = await api.post('/logout');
                console.log(user)
                console.log(resp);
                localStorage.removeItem('user');
                setUser(null);
            } catch(err) {
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