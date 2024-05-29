import React from 'react'

function CustomerPayment() {
    const customer = {
        balance: 0,
        totalPaid: 2000,
    }

  return (
    <div className='w-full flex flex-col md:flex-row justify-start gap-8 my-8 px-4'>
        {/* Balance information */}
        <div className='flex justify-start gap-3'>
            <h2 className='font-bold'>Balance: </h2>
            <p>${customer.balance.toFixed(2)}</p>
        </div>

        {/* Total Paid */}
        <div className='flex justify-start gap-3'>
            <h2 className='font-bold'>Total Paid: </h2>
            <p>${customer.totalPaid.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default CustomerPayment
