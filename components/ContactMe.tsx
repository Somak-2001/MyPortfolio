import { PhoneIcon } from '@heroicons/react/20/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/solid';

const ContactMe = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

    <div className='flex flex-col space-y-5 relative top-14'>
        {/* Subtitle */}
        <h4 className='text-4xl font-semibold text-center'>
            I have got just what you need.{" "}
            <span className='decoration-[#F7AB0A]/50 underline'>
                Lets Talk
            </span>
        </h4>
        {/* Icons */}
        <div className='space-y-3'>
          <div className='flex items-center justify-center space-x-5'>
            <PhoneIcon className='text-[#F7AB0A] w-7 h-7 animate-pulse'/>
            <p className='text-2xl'>+919883224092</p>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <EnvelopeIcon className='text-[#F7AB0A] w-7 h-7 animate-pulse'/>
            <p className='text-2xl'>somakpoddar@gmail.com</p>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <MapPinIcon className='text-[#F7AB0A] w-7 h-7 animate-pulse'/>
            <p className='text-2xl'>123 React Lane</p>
          </div>
        </div>
        <form className='flex flex-col space-y-2 w-fit mx-auto'>
           <div className='flex space-x-2'>
            <input type='text' placeholder='Name' className='outline-none bg-slate-500/30 focus:bg-slate-300/30 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'/>
            <input type='text' placeholder='Email' className='outline-none bg-slate-500/30 focus:bg-slate-300/30 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'/>
           </div>

           <input type='text' placeholder='Subject' className='outline-none bg-slate-500/30 focus:bg-slate-300/30 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'/>

           <textarea placeholder='Message' className='outline-none bg-slate-500/30 focus:bg-slate-300/30 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'/>

           <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
            Submit
           </button>
        </form>
    </div>
    </div>
  )
}

export default ContactMe;
