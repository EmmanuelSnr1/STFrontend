export default function RegisterPage() {


    return (
        <section className="pt-32 bg-cover bg-[url('../public/assets/register_bg.png')] min-h-screen">
            <div className='space-y-20 pb-16 container mx-auto grid grid-4'>
                <div className='pt-8 col-span-4 lg:col-span-1 max-w-screen-sm  px-4 lg:px-8 space-y-8'>
                   <div className="space-y-6">
                       <div className="uppercase text-2xl font-light">Sign up for Free</div>
                       <div className='text-3xl lg:text-4xl font-bold '>Create a new Account</div>
                       <div className="text-xl">Already a Member? <a className="text-lighter-teal" href="/">Login</a></div>
                   </div>

                    <div className="grid grid-cols-2 gap-8">
                       <div>
                           <label>First Name</label>
                           <input
                               className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                               placeholder='First Name' type="text" aria-autocomplete="list"/>
                       </div>
                        <div>
                            <label>Last Name</label>
                            <input
                                className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                placeholder='Last Name' type="text" aria-autocomplete="list"/>
                        </div>
                        <div className="col-span-2">
                            <label>Email Address</label>
                            <input
                                className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                placeholder='Email Address' type="email" aria-autocomplete="list"/>
                        </div>
                        <div className="col-span-2">
                            <label>Password</label>
                            <input
                                className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                placeholder='Enter password' type="password" aria-autocomplete="list"/>
                        </div>
                        <div className="col-span-2">
                            <label>Re-enter Password</label>
                            <input
                                className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                placeholder='Confirm your password' type="password" aria-autocomplete="list"/>
                        </div>
                        <button className="btn btn-primary col-span-2 btn-lg">Create an Account</button>
                    </div>
                </div>
                <div className="col-span-3"></div>

            </div>
        </section>
    )
}
