'use client';

import { PhoneIcon } from '@heroicons/react/20/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs={
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {

  // In the every input field register is used to take the input value and then handlesubmit is used to submit the entire esponse
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  // Onsubmit is our submit function and handleSubmit is given by react-hook-form
  const onSubmit: SubmitHandler<Inputs> = (data) =>{

    // Mail Client send all the data to papareact@gmail
    window.location.href = `mailto:papareact.team@gmail?subject=${data.subject}&body=Hi, my name is ${data.name}, ${data.message} ${data.email}`;
  };

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

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
           <div className='flex space-x-2'>
            <input {...register('name')} type='text' placeholder='Name' className='outline-none bg-slate-500/30 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-900  placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 hover:border-b-2'/>
            <input {...register('email')} type='text' placeholder='Email' className='outline-none bg-slate-500/30 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-900 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 hover:border-b-2'/>
           </div>

           <input {...register('subject')} type='text' placeholder='Subject' className='outline-none bg-slate-500/30  rounded-sm border-b px-6 py-4 border-[#242424] text-gray-900  placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 hover:border-b-2'/>

           <textarea {...register('message')} placeholder='Message' className='outline-none bg-slate-500/30 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-900 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 hover:border-b-2'/>

           <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
            Submit
           </button>
        </form>
    </div>
    </div>
  )
}

export default ContactMe;
