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
            date: '01/01/2024',
            total: 250,
            status: 'Paid'
        },
        {
            title: 'Fix Igniter',
            description: 'Replace igniter on gas stove',
            date: '01/01/2024',
            total: 250,
            status: 'Paid'
        },
        {
            title: 'Fix Igniter',
            description: 'Replace igniter on gas stove',
            date: '01/01/2024',
            total: 250,
            status: 'Paid'
        },
        {
            title: 'Fix Igniter',
            description: 'Replace igniter on gas stove',
            date: '01/01/2024',
            total: 250,
            status: 'Paid'
        },
    ]
  return (
    <div className='w-[90%]'>
        {/* Title */}
        <div className='flex justify-between '>
            <h1 className='text-2xl py-6'>Recent Jobs</h1>

            {/* Contact Pop-up */}
            <a href=""><button className='bg-green-800 border-solid border-2 px-5 py-3 mt-4 text-white hover:bg-white hover:text-green-800 hover:border-green-800 flex gap-2'>
                Add Job<CirclePlus />
                </button></a>

        </div>


        {/* Recent Jobs Table */}
        <RecentJobsTable rows={jobs} />


        {/* Edit information btn */}
        <div className='flex justify-center'>
            <a href={`/dashboard/jobs/${customer.id}`}><button className='btn'>See All Jobs</button></a>
        </div>
    </div>
  )
}

export default RecentJobs
