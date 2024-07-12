import React from 'react';
import RecentJobsTable from './RecentJobsTable';
import { CirclePlus } from 'lucide-react';

function RecentJobs() {
    const customer = {
        name: 'John Doe',
        id: 1,
    }
    const jobs = [
        {
            title: 'Fix Igniter',
            description: 'Replace igniter on gas stove',
            status: 'OPEN',
            invoiceStatus: 'PENDING'
        },
        {
            title: 'Fix Igniter',
            description: 'Replace igniter on gas stove',
            status: 'IN PROGRESS',
            invoiceStatus: 'PENDING'
        },
        {
            title: 'Fix Igniter',
            description: 'Replace igniter on gas stove',
            status: 'CLOSED',
            invoiceStatus: 'PAID'

        },
        {
            title: 'Fix Igniter',
            description: 'Replace igniter on gas stove',
            status: 'CLOSED',
            invoiceStatus: 'PAID'
        },
    ]
  return (
    <div className='w-[100%]'>
        {/* Title */}
        <div className='flex justify-between '>
            <h1 className='text-2xl py-6'>Recent Jobs</h1>

            
                {/* Edit information btn */}
        <div className='flex justify-between items-center'>
            <a href={`/dashboard/jobs/${customer.id}`}><button className='btn border-solid border-2 px-5 py-3 mt-4 text-white hover:bg-white hover:text-green-800 hover:border-green-800 flex gap-2'>See All Jobs</button></a>
            {/* Contact Pop-up */}
            <a href=""><button className='bg-green-800 border-solid border-2 px-5 py-3 mt-4 text-white hover:bg-white hover:text-green-800 hover:border-green-800 flex gap-2'>
                Add Job<CirclePlus />
                </button></a>
        </div>

        </div>


        {/* Recent Jobs Table */}
        <RecentJobsTable rows={jobs} />


        
    </div>
  )
}

export default RecentJobs
