import logo from '../assets/logo2.svg'

const Footer = () => {
  return (
    <div className="w-full bg-dark-blue ">


      <div className="container mx-auto p-6 flex md:flex-row flex-col space-y-6 justify-between items-center">


        <div className='flex flex-col space-y-8 justify-between'>
           <img src={logo} alt="logo" />
           <div className='flex space-x-1'>
             <a href='#' className='w-6'>
               <svg xmlns="http://www.w3.org/2000/svg" className='fill-white hover:fill-lime-green duration-300' width="20" height="20"><path  d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
             </a>
             <a href='#' className='w-6'>
               <svg xmlns="http://www.w3.org/2000/svg" className='fill-white hover:fill-lime-green duration-300' width="21" height="20"><path  d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"/></svg>
             </a>
             <a href='#' className='w-6'>
               <svg xmlns="http://www.w3.org/2000/svg" className='fill-white hover:fill-lime-green duration-300' width="21" height="18"><path  d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"/></svg>
             </a>
             <a href='#' className='w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-white hover:fill-lime-green duration-300' width="20" height="20"><path  d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"/></svg>
             </a>
             <a href='#' className='w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-white hover:fill-lime-green duration-300' width="21" height="20"><path  d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"/></svg>
             </a>
           </div>
        </div>


        <div className='flex flex-col md:flex-row md:justify-around flex-1'>
          <div className='flex flex-col'>
             <a href="#" className='text-very-light-gray duration-300 hover:text-lime-green text-sm p-1'>About Us</a>
             <a href="#" className='text-very-light-gray duration-300 hover:text-lime-green text-sm p-1'>Contact</a>
             <a href="#" className='text-very-light-gray duration-300 hover:text-lime-green text-sm p-1'>Blog</a>
          </div>
          <div className='flex flex-col'>
             <a href="#" className='text-very-light-gray duration-300 hover:text-lime-green text-sm p-1'>Careers</a>
             <a href="#" className='text-very-light-gray duration-300 hover:text-lime-green text-sm p-1'>Support</a>
             <a href="#" className='text-very-light-gray duration-300 hover:text-lime-green text-sm p-1'>Privacy Policy</a>
          </div>
        </div>


        <div className='flex flex-col'>
              <button href='#' className='hover:opacity-70 block md:ml-0 mx-auto text-center duration-300 py-3 px-6 rounded-full font-semibold text-white bg-gradient-to-r to-blue-cyan from-lime-green baseline'>
                 Request Invite
              </button>
          <p className='text-grayish-blue text-xs p-4'>
            ©Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer