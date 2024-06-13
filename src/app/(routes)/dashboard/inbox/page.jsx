"use client"

import React, { useEffect, useState } from 'react'
import EmailModal from '../customers/[id]/_components/EmailModal';
import { getEmails } from '@/src/lib/api';
import styled from 'styled-components';


function Page() {
const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const emailData = await getEmails();
        setEmails(emailData.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  useEffect(() => {
    console.log('Emails state updated:', emails); // Debugging
  }, [emails]);

  const openModal = (email) => {
    setSelectedEmail(email);
  };

  const closeModal = () => {
    setSelectedEmail(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const ScrollContent = styled.div`
  .inbox-container::-webkit-scrollbar {
    width: 2px !important;
    height: 2px !important;
  }
  
  .inbox-container::-webkit-scrollbar-track {
    background: #f1f1f1 !important;
    border-radius: 10px !important;
  }
  
  .inbox-container::-webkit-scrollbar-thumb {
    background-color: #888 !important;
    border-radius: 10px !important;
    border: 3px solid #f1f1f1 !important;
  }
  
  .inbox-container::-webkit-scrollbar-thumb:hover {
    background-color: #555 !important;
  }
  
  .inbox-container {
    scrollbar-width: thin !important;
    scrollbar-color: #888 #f1f1f1 !important;
  }
  `

  return (
    <div className='bg-white flex flex-col mt-5 items-center w-[100%] inbox-container'>
        <div className='flex flex-col justify-center w-[96%]'>
            <div className='bg-blue-500 text-white px-4 py-4 rounded-t-2xl text-3xl'>INBOX</div>
        </div>
        <div className='grid grid-cols-3 md:h-[32rem] border-2 border-slate-300 w-[96%]'>

            {/* Email list */}
            <ScrollContent className='col-span-1 border-2 border-white border-r-slate-100 shadow-sm overflow-y-scroll'>
                <div className='border-2 border-white border-b-slate-100 h-[10%]'>Filter</div>
                {/* Display fetched emails */}
                {emails.length > 0 ? (
                <div className='mt-7'>
                    <h2 className='p-2'>All Inboxes</h2>
                    <ul>
                    {emails.map((email) => (
                        <li className='cursor-pointer border-2 border-t-slate-100 border-b-slate-100 py-3 text-md text-black hover:bg-slate-200 px-3' style={{fontSize: '14px', fontWeight: 'normal', fontColor: '#000'}} key={email.id} onClick={() => openModal(email)}>
                        <h3><b>From: {email?.from[0]?.email}</b></h3>
                        <h3><b>Subject:</b> {email.subject}</h3>
                        </li>
                    ))}
                    </ul>
                    
                </div>
                ) : (
                <p>No emails found.</p>
                )}
            </ScrollContent>

            {/* Email view */}
            <div className='col-span-2 overflow-y-scroll'>
                {/* Render the modal */}
                <EmailModal email={selectedEmail} isOpen={selectedEmail !== null} onClose={closeModal} />
            </div>
        </div>
        <style>

        </style>
    </div>
  )
}

export default Page
