import React, { useState, useContext } from 'react';
import axios from 'axios'; // You can use axios for making API calls
import ErrorModal from '../components/ErrorModal'; // Import the ErrorModal component
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';




export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false); // State to control the modal visibility
    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);



    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8090/api/auth/signIn', {
                username: email,
                password: password
            });
            
            // Store the JWT token and user details
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data));

            // Update the auth context
            dispatch({ type: 'LOGIN', payload: response.data });
            console.log(response) 

            navigate('/my-portfolio');

        } catch (err) {
            setError('Invalid email or password. Please try again.');
            setShowModal(true); // Show the modal when there's an error
        }
    };


    return (
        <section className="pt-32 bg-cover bg-[url('../public/assets/bg1.png')] min-h-screen">
            <div className='flex flex-col items-center space-y-20 pb-16'>
                <div className='pt-16 container mx-auto px-4 lg:px-8'>
                   <div className="flex flex-col items-center min-w-full grid grid-cols-4 gap-x-16">
                       <div className='text-3xl lg:text-4xl mb-4 text-center col-span-4 font-bold '>Login to Your Account</div>
                       <div className="text-2xl font-light mb-8 text-center col-span-4 text-neutral/90">Monitor and Trade from over 250,000 Stocks</div>
                       <div className="space-y-4 lg:px-16 col-span-4 lg:col-span-2">
                           <div className="login-email">
                               <label>Email Address</label>
                               <input
                                   className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)} 
                                   placeholder='Email Address' type="email" aria-autocomplete="list"/>
                           </div>
                           <div className="login-password">
                               <label>Password</label>
                               <input
                                   className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                   value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                   placeholder='Enter password' type="password" aria-autocomplete="list"/>
                           </div>
                                {error && <div className="text-red-500">{error}</div>}
                                <button onClick={handleLogin} className="btn btn-primary w-full btn-lg">Sign In</button>
                       </div>
                       
                       <div className="space-y-4  lg:px-16 col-span-4 lg:col-span-2 pt-5">
                           <button className="btn btn-outline btn-primary w-full btn-lg">Sign In With Google</button>
                           <button className="btn btn-outline btn-primary w-full btn-lg">Sign In With Facebook</button>
                           <button className="btn btn-outline btn-primary w-full btn-lg">Sign In With Apple Account</button>
                       </div>
                   </div>
                </div>

            </div>  
            {/* <ErrorModal 
                isOpen={showModal} 
                message={error} 
                onClose={() => setShowModal(false)} 
            /> */}
        </section>
        
    )
}
