"use client"

import React, { useEffect, useRef, useState, useCallback, use, useContext } from 'react';
import EmailModal from '../../customers/[id]/_components/EmailModal';
import { getEmails } from '@/src/lib/api';
import Select from 'react-select';
import InboxTabs from './InboxTabs'
import {CurrentEmailContext} from '@/src/contexts/CurrentEmailProvider';

function Emails() {
  const clients = [
    { value: 'bromik90@gmail.com', label: 'Mikaila Brown' },
    { value: 'tarcenters@gmail.com', label: 'Stanley Brown' },
    { value: 'noralena.brown@gmail.com', label: 'Noralena Brown' },    
  ];

  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [limit, setLimit] = useState(5);
  const [emailsLoading, setEmailsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const {currentEmail} = useContext(CurrentEmailContext);
 

  useEffect(() => {
    setLoading(false);
  }, []);

  // useEffect(() => {
  //   console.log(emails);
  // }, [emails]);

  const openModal = (email) => {
    setSelectedEmail(email);
  };

  const closeModal = () => {
    setSelectedEmail(null);
  };

  const searchClient = async () => {
    try {
      setEmailsLoading(true);
      console.log(currentEmail?.grantId)
      const emailData = await getEmails(5, selectedOption.value, currentEmail?.grantId);
      setEmails(emailData.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setEmailsLoading(false);
    }
  };

  const getMoreEmails = async () => {
    let searchLimit = limit + 5;
    setLimit(searchLimit);
    
    const emailData = await getEmails(searchLimit, selectedOption.value, currentEmail?.grantId);
    setEmails(emailData.data);
  };

  const lookUpClients = (option) => {
    setSelectedOption(option);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }



  useEffect(() => {
    setEmails([]);
  }, [currentEmail])


  return (
    <div className='bg-white flex flex-col items-center w-[100%] inbox-container'>


      
        

        
        <InboxTabs>  
        <div className='grid grid-cols-3 md:h-[32rem] border-2 border-slate-100 w-[100%]'>

            {/* Email list */}
            <div className='col-span-1 border-2 border-white border-r-slate-100 shadow-sm overflow-y-scroll'>
                <div className='border-2 border-white border-b-slate-100 bg-white h-[10%] flex items-center justify-around' >
                  <Select
                    value={selectedOption}
                    options={clients}
                    onChange={lookUpClients}
                    className='w-[70%]'
                  />
                  <button className='px-4 py-3 border-2 border-slate-900 text-white bg-slate-900 hover:text-slate-900 hover:bg-white' onClick={searchClient}>
                    Search
                  </button>
                </div>

                {/* Display fetched emails */}
                {emails.length > 0 ? (
                <div className='mt-7 flex flex-col'>
                    <h2 className='p-2'>All Inboxes</h2>
                    <ul>
                    {emails.map((email, index) => (
                        index < limit ? <li className='cursor-pointer border-2 border-t-slate-100 border-b-slate-100 py-3 text-md text-black hover:bg-slate-200 px-3' style={{fontSize: '14px', fontWeight: 'normal', fontColor: '#000'}} key={email.id} onClick={() => openModal(email)}>
                        <div className='flex justify-between'><b>From: {email?.from[0]?.email}</b> <p>{new Date(email?.createdAt * 1000).toLocaleDateString()}</p></div>
                        <h3><b>Subject:</b> {email.subject}</h3>
                        </li> : ''
                    ))}
                    </ul>
                    <button className='btn border-2 rounded-2xl border-slate-50 px-2 py-1 align-middle' onClick={getMoreEmails}>Load More Emails</button>
                </div>
                ) : (
                  <div className="flex justify-center mt-10">
                    {emailsLoading ? <div className='loader'></div>
                     : <p className='text-center text-slate-300 text-2xl'>Search Customer Email</p>
                     } 
                  </div>
                )}
            </div>




            {/* Email view */}
            <div className='col-span-2 overflow-y-scroll'>
                {/* Render the modal */}
                <EmailModal email={selectedEmail} isOpen={selectedEmail !== null} onClose={closeModal} />
            </div>
        </div>
        </InboxTabs>  
        
    </div>
  );
}

export default Emails;
