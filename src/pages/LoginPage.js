export default function LoginPage() {


    return (
        <section className="pt-32 bg-cover bg-[url('../public/assets/bg1.png')] min-h-screen">
            <div className='flex flex-col items-center space-y-20 pb-16'>
                <div className='pt-16 container mx-auto px-4 lg:px-8'>
                   <div className="flex flex-col items-center min-w-full grid grid-cols-4 gap-x-16">
                       <div className='text-3xl lg:text-4xl mb-4 text-center col-span-4 font-bold '>Login to Your Account</div>
                       <div className="text-2xl font-light mb-8 text-center col-span-4 text-neutral/90">Monitor and Trade from over 250,000 Stock Portfolios</div>
                       <div className="space-y-4 lg:px-16 col-span-4 lg:col-span-2">
                           <div className="">
                               <label>Email Address</label>
                               <input
                                   className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                   placeholder='Email Address' type="email" aria-autocomplete="list"/>
                           </div>
                           <div className="">
                               <label>Password</label>
                               <input
                                   className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                                   placeholder='Enter password' type="password" aria-autocomplete="list"/>
                           </div>
                           <button className="btn btn-primary w-full btn-lg">Sign In</button>
                       </div>
                       <div className="space-y-4  lg:px-16 col-span-4 lg:col-span-2 pt-5">
                           <button className="btn btn-outline btn-primary w-full btn-lg">Sign In With Google</button>
                           <button className="btn btn-outline btn-primary w-full btn-lg">Sign In With Facebook</button>
                           <button className="btn btn-outline btn-primary w-full btn-lg">Sign In With Apple Account</button>
                       </div>
                   </div>
                </div>


            </div>
        </section>
    )
}
