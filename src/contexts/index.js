import React from 'react';
import useAppState from './useAuthState';


export const AuthContext = React.createContext({
    state: {},
    actions: {}
});

export const AuthContextProvider = (props) => {
    const { state, actions } = useAppState();
    return (
        <AuthContext.Provider value={{ state, actions }}>
            {
                props.children
            }
        </AuthContext.Provider>
    );
};
