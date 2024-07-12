import React from 'react';
import RecentContactsTable from './RecentContactsTable';
import { CirclePlus } from 'lucide-react';

function RecentContacts() {
    const jobs = [
        {
            type: 'INQUIRY',
            date: '01/01/2024',
            comments: 'Cx wants to know when they will receive invoice',
            job_id: 1123,
        },
        {
            type: 'INQUIRY',
            date: '01/01/2024',
            comments: 'Cx wants to know when they will receive invoice',
            job_id: 1123,
        },
        {
            type: 'INQUIRY',
            date: '01/01/2024',
            comments: 'Cx wants to know when they will receive invoice',
            job_id: 1123,
        },
        {
            type: 'INQUIRY',
            date: '01/01/2024',
            comments: 'Cx wants to know when they will receive invoice',
            job_id: 1123,
        },
    ]
  return (
    <div className='flex flex-col w-[90%]'>
        {/* Title */}
        <div className='flex justify-between items-center py-3'>
            <h1 className='text-2xl'>Recent Contact</h1>

            {/* Contact Pop-up */}
            <a href=""><button className='bg-green-800 border-solid border-2 px-5 py-3 mt-4 text-white hover:bg-white hover:text-green-800 hover:border-green-800 flex gap-2'>
                Add Contact<CirclePlus />
                </button></a>

        </div>

        {/* Recent Jobs Table */}
        <RecentContactsTable rows={jobs} />

        {/* Edit information btn */}
        <div className='flex justify-center'>
            <a href=""><button className='btn'>See All Contacts</button></a>
        </div>
    </div>
  )
}

export default RecentContacts
