import { Phone } from 'lucide-react'
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
    <div className='w-full flex flex-col md:flex-row items-center md:justify-between'>
        {/* Customer information */}
        <div className='flex flex-col md:flex-row justify-start gap-3 items-center'>
            {/* Profile Img */}
            <div>
                <Image src='/user-img.png' alt="User image" className='max-w-24' width={300} height={200}/>
            </div>
            <div className='text-center md:text-left'>
                {/* Name */}
                <h2>{customer.name}</h2>
                <div className='flex'>
                    <Phone />
                    <a href={`tel:${customer.phone}`}><h2>{customer.phone}</h2></a>
                </div>
                
                <a href={`mailto:${customer.email}`}><h2>{customer.email}</h2></a>
                <h2>{customer.address}</h2>
            </div>
        </div>
        {/* Edit information btn */}
        <div>
            <a href=""><button className='btn'>Edit Customer</button></a>
        </div>
    </div>
  )
}

export default CustomerInformation
