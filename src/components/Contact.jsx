import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#374a5c]' >Contact</h1>
      <form action="https://getform.io/f/47a691d7-4b84-455e-b728-77c6b14dd5d3" method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Name</label>
                <input type="text" name='name' placeholder='Full Name' className='border-2 rounded-lg p-3 flex border-gray-300'/>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Phone</label>
                <input type="number" name='phone' placeholder='Phone Contact' className='border-2 rounded-lg p-3 flex border-gray-300'/>
            </div>
        </div>
        <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input type="email" name='email' placeholder='Your@email.com' className='border-2 rounded-lg p-3 flex border-gray-300 w-full'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input type="text" name='subject' placeholder='Subject' className='border-2 rounded-lg p-3 flex border-gray-300 w-full'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea rows='10' name='message' placeholder='Message' className='border-2 rounded-lg p-3 flex border-gray-300 w-full'></textarea>
            </div>
            <button className='bg-[#374a5c] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                Send Message
            </button>
      </form>
    </div>
  )
}

export default Contact


/* https://getform.io/ */