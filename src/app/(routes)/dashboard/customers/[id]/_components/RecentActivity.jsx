import React from 'react';
import RecentAttatchmentsTable from './RecentActivityTable';
import { CirclePlus } from 'lucide-react';

function RecentActivity() {
    const jobs = [
        {
            name: 'Client Contract',
            link: 'https://google.com',
            date: '01/01/2024',
            jobId: '2234'
        },
        {
            name: 'Client Contract',
            link: 'https://google.com',
            date: '01/01/2024',
            jobId: '2234'
        },
        {
            name: 'Client Contract',
            link: 'https://google.com',
            date: '01/01/2024',
            jobId: '2234'
        },
        {
            name: 'Client Contract',
            link: 'https://google.com',
            date: '01/01/2024',
            jobId: '2234'
        },
        {
            name: 'Client Contract',
            link: 'https://google.com',
            date: '01/01/2024',
            jobId: '2234'
        },
    ]
  return (
    <div className='w-[90%]'>
        {/* Title */}
        <div className='flex justify-between'>
            <h1 className='text-2xl py-6'>Attachments</h1>

            {/* Contact Pop-up */}
            <a href=""><button className='bg-green-800 border-solid border-2 px-5 py-3 mt-4 text-white hover:bg-white hover:text-green-800 hover:border-green-800 flex gap-2'>
                Add Document<CirclePlus />
                </button></a>

        </div>

        {/* Recent Jobs Table */}
        <RecentAttatchmentsTable data={jobs} />

        {/* Edit information btn */}
        <div className='flex justify-center'>
            <a href=""><button className='btn'>View All Documents</button></a>
        </div>
    </div>
  )
}

export default RecentActivity
