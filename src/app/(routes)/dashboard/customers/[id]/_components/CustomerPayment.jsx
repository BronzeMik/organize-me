import React from 'react'

function CustomerPayment() {
    const customer = {
        balance: 0,
        totalPaid: 2000,
    }

  return (
    <div className='w-full flex flex-col justify-start gap-8 my-8 px-4 border-2 border-slate-100 rounded-xl p-4 bg-gray-50 bg-opacity-20 shadow-md '>
        {/* Balance information */}
        <div className='flex justify-start gap-3'>
            <h2 className='font-bold'>Total Balance: </h2>
            <p>${customer.balance.toFixed(2)}</p>
        </div>

        {/* Total Paid */}
        <div className='flex justify-start gap-3'>
            <h2 className='font-bold'>Lifetime Value: </h2>
            <p>${customer.totalPaid.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default CustomerPayment
