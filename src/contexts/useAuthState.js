import { useState, useMemo } from 'react';

const useAuthState = () => {
    const initialState = {};

    const [state, setState] = useState(initialState);

    const actions = useMemo(() => getActions(setState), [setState]);

    return { state, actions }
};

const autoRefreshToken = () => {
    setTimeout(() => {
        autoRefreshToken();
    }, 10 * 60000)
};

autoRefreshToken();


const getActions = (setState) => ({
    setUser: (user) => {
        setState(state => ({ ...state, user }))
    },
    setToken: (token) => {
        setState(state => ({ ...state, token }))
    }
});

export default useAuthState;
