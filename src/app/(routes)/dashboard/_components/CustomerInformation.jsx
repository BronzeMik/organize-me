import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function CustomerInformation() {
    const customer = {
        name: 'John Doe',
        phone: '222-456-7890',
        email: 'info@email.com',
        category: 'RESIDENTIAL',
        notes: 'Schedule appointments during the morning only',
        address:"123 Main St., Cleveland, Ohio 44109",
        id: 7,

      }
  return (
    <div className='w-full flex flex-col items-center md:justify-between border-2 border-slate-100 rounded-xl p-4 bg-gray-50 bg-opacity-20 shadow-md'>
        {/* Customer information */}
        <div className='w-full flex items-center justify-between'>
            {/* Profile Img */}
            <Image src='/user-img.png' alt="User image" className='max-w-12' width={300} height={200}/>

            {/* Edit information btn */}
            <div>
                <a href=""><button className='btn'>Edit Customer</button></a>
            </div>
        </div>


        <div className='w-full flex flex-col md:flex-row justify-start gap-3 items-center'>
            
            
            <div className='w-[80%] text-center md:text-left'>
                {/* Name */}
                
                <div className='flex gap-2 my-4 mb-6'>
                    <h2 className='font-bold'>Main Contact: </h2>
                    <h2>{customer.name}</h2>
                </div>
                <div className='flex justify-between border-b-2 py-3 border-stone-200 my-4'>
                    <Phone />
                    <a href={`tel:${customer.phone}`} className='text-blue-500'><h2>{customer.phone}</h2></a>
                </div>
                <div className='flex justify-between border-b-2 py-3 border-stone-200 my-4'>
                    <Mail />
                    <a href={`mailto:${customer.email}`} className='text-blue-500'><h2>{customer.email}</h2></a>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default CustomerInformation
