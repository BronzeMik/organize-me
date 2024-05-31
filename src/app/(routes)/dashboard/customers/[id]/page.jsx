import React from 'react';
import CustomerInformation from '../../_components/CustomerInformation';
import CustomerPayment from './_components/CustomerPayment';
import RecentJobs from './_components/RecentJobs';
import RecentContacts from './_components/RecentContacts';
import RecentActivity from './_components/RecentActivity'

function Page() {
  return (
    <div className=' w-[100%] md:w-[80%] px-3 md:py-5 md:px-9'>
        {/* Customer Information */}
        <CustomerInformation />
        <CustomerPayment />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-items-center'>
        {/* Recent Jobs */}
        <div className='w-[100%] border-solid border-slate-300 border-2 rounded-2xl shadow-lg flex flex-col justify-center items-center bg-white'>
            <RecentJobs />
        </div>

        {/* Recent Contacts */}
        <div className='w-[100%] border-solid border-slate-300 border-2 rounded-2xl shadow-lg flex flex-col justify-center items-center my-12 bg-white'>
            <RecentContacts />
        </div>
        </div>

        {/* Recent Activity */}
        <div className='w-full border-solid border-slate-300 border-2 rounded-2xl shadow-lg flex flex-col justify-center items-center my-12 bg-white'>
            <RecentActivity />
        </div>
    </div>
  )
}

export default Page
