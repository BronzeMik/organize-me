"use client"

import React, { useEffect, useState } from 'react';
import CustomerInformation from '../../_components/CustomerInformation';
import CustomerPayment from './_components/CustomerPayment';
import RecentJobs from './_components/RecentJobs';
import RecentContacts from './_components/RecentContacts';
import RecentActivity from './_components/RecentActivity';
import {getEmails} from '../../../../../lib/api';
import EmailModal from './_components/EmailModal'

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

  return (
    <div className=' w-[100%] md:w-[80%] px-3 md:py-5 md:px-9'>
        {/* Customer Information */}
        <CustomerInformation />
        <CustomerPayment />

        <div className='grid grid-cols-1 gap-3 items-center justify-items-center'>
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
        <div>
          {/* Display fetched emails */}
        {emails.length > 0 ? (
          <div>
            <h2>Emails</h2>
            <ul>
              {emails.map((email) => (
                <li key={email.id} onClick={() => openModal(email)}>
                  <h3>{email.subject}</h3>
                </li>
              ))}
            </ul>
            {/* Render the modal */}
            <EmailModal email={selectedEmail} isOpen={selectedEmail !== null} onClose={closeModal} />
          </div>
        ) : (
          <p>No emails found.</p>
        )}

        </div>
    </div>
  )
}

export default Page
