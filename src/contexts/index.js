import React, { useState } from 'react';
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

export const AppContext = React.createContext({
    state: {

    },
    updateState: null
})

export const AppContextProvider = (props) => {
    const { state, updateState } = useState({});

    return (
        <AppContext.Provider value={{ state, updateState }}>
            {props.children}
        </AppContext.Provider>
    )


}