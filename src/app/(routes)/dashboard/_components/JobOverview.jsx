"use client"
import React, { useEffect } from 'react'
import * as Progress from '@radix-ui/react-progress';

function JobOverview({ job }) {
    
    
  return (
    <div className='bg-white border-solid border-slate-200 border-2 px-3 py-5 mt-8 md:w-[90%] flex flex-col text-sm'>
        {/* Job details */}
        <div className='flex justify-between items-center mt-8 px-4 flex-wrap'>
            <h2 className=' text-base'><span className='font-bold uppercase'>Job Title:</span> {job.job_title}</h2>
            <a href='' className='hover:text-black text-blue-500 underline text-base uppercase'>Edit Job</a>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center p-5 w-[100%] self-center flex-wrap'>
            <div className='flex flex-col gap-5 justify-start pt-7'>
                <h2><span className='font-bold uppercase'>Job Id:</span> {job.job_id}</h2>
                <h2><span className='font-bold uppercase'>Start Date:</span> {job.start_date}</h2>
                <h2><span className='font-bold uppercase'>Job Status:</span> {job.status}</h2>
            </div>
            <div className='flex flex-col gap-5 justify-end pt-7'>
                <h2><span className='font-bold uppercase'>Category:</span> {job.category}</h2>
                <h2><span className='font-bold uppercase'>End Date:</span> {job.end_date}</h2>
                <h2><span className='font-bold uppercase'>Last Update:</span> {job.last_update}</h2>
            </div>
        </div>

        <hr className='border-solid border-gray-200 border-2 w-[80%] self-center' />

        {/* Job Details */}
        <div className='flex flex-col mt-8 px-5'>
            {/* <h2><span className='font-bold md:ml-16'>Description:</span> {job.description}</h2> */}

            {/* Progress bar */}
            <div className='my-4 flex flex-col items-center'>
                <h1 className='mb-5'><span className='font-bold'>JOB PROGRESS</span>: {job.progress}% Complete</h1>
                <Progress.Root className="ProgressRoot" value={job.progress}>
                <Progress.Indicator
                    className={`ProgressIndicator`}
                    style={{ transform: `translateX(-${100 - job?.progress}%)` }}
                />
                </Progress.Root>
            </div>
           
            {/* Buttons description */}
            <div className='flex justify-between flex-wrap md:flex-nowrap'>
                <a href=''><button className='btn'>View Details</button></a>
                {job?.status == 'NOT STARTED' && <a href=''><button className='btn bg-red-800 text-white'>Cancel Job</button></a>}
            </div>
        </div>
    </div>
  )
}

export default JobOverview
