import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";

export function Footer() {
    return (
        <footer className="text-gray-600 bg-black/80 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a href='/'
                   className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                    <span className="ml-3 text-xl">StocXTune</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">Copyright © 2022
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <button className="btn btn-ghost btn-circle">
               <FaTwitter/>
              </button>
              <button className="btn btn-ghost btn-circle">
               <FaFacebookF/>
              </button>
              <button className="btn btn-ghost btn-circle">
               <FaInstagram/>
              </button>
              <button className="btn btn-ghost btn-circle">
               <FaLinkedinIn/>
              </button>
            </span>
            </div>
        </footer>
    )
}
