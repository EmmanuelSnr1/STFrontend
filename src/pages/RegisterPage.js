import React, { useState } from 'react';
import useSignUp from '../hooks/useSignUp';
import { useNavigate } from 'react-router-dom';



export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const { signUp, error, isLoading } = useSignUp();


    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
    
        const userData = {
            name: `${firstName} ${lastName}`,
            email,
            password,
            accountNumber,
            mobileNumber,
            roles: "[USER,ADMIN]"
        };
        
        try {
            await signUp(userData);
            navigate('/my-portfolio');
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }


    return (
        <section className="pt-32 bg-cover bg-[url('../public/assets/register_bg.png')] min-h-screen">
            <div className='space-y-20 pb-16 container mx-auto grid grid-4'>
                <div className='pt-8 col-span-4 lg:col-span-1 max-w-screen-sm  px-4 lg:px-8 space-y-8'>
                   <div className="space-y-6">
                       <div className="uppercase text-2xl font-light">Sign up for Free</div>
                       <div className='text-3xl lg:text-4xl font-bold '>Create a new Account</div>
                       <div className="text-xl">Already a Member? <a className="text-lighter-teal" href="/">Login</a></div>
                   </div>
                   <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-8">
                        <div>
                            <label>First Name</label>
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                placeholder='First Name' type="text" aria-autocomplete="list"/>
                        </div>
                            <div>
                                <label>Last Name</label>
                                <input
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                    placeholder='Last Name' type="text" aria-autocomplete="list"/>
                            </div>
                            <div className="col-span-2">
                                <label>Mobile Number</label>
                                <input
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                    placeholder='Mobile Number' type="tel" aria-autocomplete="list"/>
                            </div>
                            <div className="col-span-2">
                                <label>Account Number</label>
                                <input
                                    value={accountNumber}
                                    onChange={(e) => setAccountNumber(e.target.value)}
                                    className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                    placeholder='Account Number' type="number" aria-autocomplete="list"/>
                            </div>
                            <div className="col-span-2">
                                <label>Email Address</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                    placeholder='Email Address' type="email" aria-autocomplete="list"/>
                            </div>
                            <div className="col-span-2">
                                <label>Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                    placeholder='Enter password' type="password" aria-autocomplete="list"/>
                            </div>
                            <div className="col-span-2">
                                <label>Re-enter Password</label>
                                <input
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                    placeholder='Confirm your password' type="password" aria-autocomplete="list"/>
                            </div>
                            <button disabled = {isLoading} type="submit" className="btn btn-primary col-span-2 btn-lg">
                            {isLoading ? "Registering..." : "Create an Account"}
                            </button>
                            {error && <div className='error'> {error}</div>}
                        </div>
                    </form>
                    </div>
                    <div className="col-span-3"></div>
                   
            </div>
        </section>
    )
}
