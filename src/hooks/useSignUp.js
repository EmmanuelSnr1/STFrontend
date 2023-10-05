import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';

export const useSignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [roles, setRoles] = useState('[USER,ADMIN]');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { dispatch } = useContext(AuthContext);

    const signUp = async (userData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:8090/api/auth/signUp', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            
            

            // Update the auth context
            dispatch({ type: 'LOGIN', payload: userData });

            // Save the user to local storage
            localStorage.setItem('user', JSON.stringify(userData));
            console.log(response)

        } catch (err) {
            console.error('Error registering user:', err.message);
            if (err.response && err.response.data) {
                // Log the server's response to the error
                console.error('Server Response:', err.response.data);
                setError(err.response.data.error || 'Error registering user.');
            } else {
                setError(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        firstName, setFirstName,
        lastName, setLastName,
        mobileNumber, setMobileNumber,
        accountNumber, setAccountNumber,
        email, setEmail,
        password, setPassword,
        roles, setRoles,
        signUp,
        isLoading,
        error
    };
};

export default useSignUp;
