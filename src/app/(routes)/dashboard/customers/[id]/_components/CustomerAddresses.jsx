import React from 'react'

function CustomerAddresses({customer}) {
  return (
    <div className='w-full flex flex-col md:justify-between border-2 border-slate-100 rounded-xl bg-gray-50 bg-opacity-20 shadow-md mt-6 mb-8'>
        <h2 className='text-2xl text-left p-6'>Addresses</h2>

        <div className='w-full flex justify-between items-center cursor-pointer border-2 px-4 ml-2 border-slate-50 hover:bg-slate-100'>
            <p>{customer?.address}</p>
            <button className='btn'>Edit Address</button>
        </div>
    </div>
  )
}

export default CustomerAddresses
