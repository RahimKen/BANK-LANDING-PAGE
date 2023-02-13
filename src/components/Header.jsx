import bg_intro from '../assets/bg-intro.svg'
import mockup from '../assets/image-mockups.png'
import '../App.css'

const Header = () => {
  return (
    <header className="relative w-full bg-very-light-gray p-0">
       <div className="container mx-auto flex md:flex-row flex-col-reverse w-full">

         <div className="flex-1 space-y-4 p-10 mt-10">
             <h2 className='text-dark-blue leading-relaxed font-semibold text-4xl md:text-5xl p-6 mt-6 text-center md:text-left'>
               Next generation <br/> digital banking
             </h2>

             <p className='text-grayish-blue text-lg mx-auto md:ml-0  md:pl-6 text-center md:text-left w-[60%]'>
              Take your financial life online. Your Easy bank account 
              wille be a one-stop-shop for spending, saving, 
              budgeting, investing, and much more.
             </p>
            
            <div className='mx-auto  p-6'>
              <button href='#' className='hover:opacity-70 block md:ml-0 mx-auto text-center duration-300 py-3 px-6 rounded-full font-semibold text-white bg-gradient-to-r to-blue-cyan from-lime-green baseline'>
                 Request Invite
              </button>
            </div>
         </div>

         <div style={{backgroundImage : `url(${bg_intro})` ,
                      backgroundSize : "cover"}} className="flex-1 relative">
             <img className='relative md:absolute overflow-hidden z-1 w-50 h-50 -top-20' src={mockup} />
         </div>

       </div>
    </header>
  )
}

export default Header