import { ReceiptIcon } from 'lucide-react'
import React from 'react'

function CustomerBillingSummary() {
    const invoice = {
        id: 1,
        date: 'June 11, 2024',
        total: 2000.00
    }
  return (
    <div className='w-full flex flex-col items-center md:justify-between border-2 border-slate-100 rounded-xl bg-gray-50 bg-opacity-20 shadow-md mb-8'>
        <div className='flex justify-between w-full items-center p-4'>
            <h2 className='text-xl'>Recent Invoices</h2>
            <button className='btn'>New</button>
        </div>
        

        <div className='w-full flex justify-between items-end border-2 p-4 border-slate-50 hover:bg-slate-100'>
            <div className='flex items-center'>
                <ReceiptIcon  className='w-12'/>
                <div className='flex flex-col'>
                    <h4>{invoice?.date}</h4>
                    <h4>#{invoice?.id}</h4>
                </div>
            </div>
            <div>
                <h4>${invoice?.total}</h4>
            </div>
        </div>

        <div className='flex justify-between w-full bg-slate-100 p-4'>
            <h2>Current Balance: </h2>
            <h2>$2000.00</h2>
        </div>
    </div>
  )
}

export default CustomerBillingSummary
