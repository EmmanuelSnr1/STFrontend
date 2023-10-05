import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

export const useLogout = () => {
    const { dispatch } = useContext(AuthContext);

    const logout = () => {
        // Remove user data from local storage
        localStorage.removeItem('user');

        // Update the auth context to reflect the user's logged-out state
        dispatch({ type: 'LOGOUT' });
    };

    return logout;
};
