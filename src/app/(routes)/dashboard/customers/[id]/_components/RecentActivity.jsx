import React from 'react';
import RecentActivityTable from './RecentActivityTable';
import { CirclePlus } from 'lucide-react';

function RecentActivity() {
    const jobs = [
        {
            action: 'INQUIRY',
            detail: '01/01/2024',
            status: 'Cx wants to know when they will receive invoice',
            job_id: 1123,
        },
        {
            action: 'INQUIRY',
            detail: '01/01/2024',
            status: 'Cx wants to know when they will receive invoice',
            job_id: 1123,
        },
        {
            action: 'INQUIRY',
            detail: '01/01/2024',
            status: 'Cx wants to know when they will receive invoice',
            job_id: 1123,
        }
    ]
  return (
    <div className='w-[90%]'>
        {/* Title */}
        <div className='flex justify-between'>
            <h1 className='text-2xl py-6'>Recent Activity</h1>

            {/* Contact Pop-up */}
            <a href=""><button className='bg-green-800 border-solid border-2 px-5 py-3 mt-4 text-white hover:bg-white hover:text-green-800 hover:border-green-800 flex gap-2'>
                Add Activity<CirclePlus />
                </button></a>

        </div>

        {/* Recent Jobs Table */}
        <RecentActivityTable rows={jobs} />

        {/* Edit information btn */}
        <div className='flex justify-center'>
            <a href=""><button className='btn'>View All Activity</button></a>
        </div>
    </div>
  )
}

export default RecentActivity
