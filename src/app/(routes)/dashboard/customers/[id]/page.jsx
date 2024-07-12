"use client"

import React, { useEffect, useState } from 'react';
import CustomerInformation from '../../_components/CustomerInformation';
import CustomerPayment from './_components/CustomerPayment';
import RecentJobs from './_components/RecentJobs';
import RecentContacts from './_components/RecentContacts';
import RecentActivity from './_components/RecentActivity';
import { Card, Metric, Text } from '@tremor/react';
import EmailModal from './_components/EmailModal'
import LineChartComponent from './_components/LineChart';
import DonutChartComponent from './_components/DonutChart';
import ServiceCategoriesTable from './_components/ServiceCategoriesTable';
import { getEmails } from '@/src/lib/api';
import CustomerBillingSummary from './_components/CustomerBillingSummary';
import MapComponent from './_components/MapComponent';
import CustomerAddresses from './_components/CustomerAddresses';

function Page() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [emailsLoading, setEmailsLoading] = useState(false);
  const [limit, setLimit] = useState(5);

  const customer = {
    name: 'Mikaila Brown',
    email: 'bromik90@gmail.com',
    address: '2403 Mira Court, Cleveland, Ohio 44109'
  }

  useEffect(() => {
    setLoading(false);
    const fetchEmails = async() => {
      setEmailsLoading(true);
      const emailData = await getEmails(5, customer.email, '60f5b664-c390-46f0-9609-2cb66a7f681b');
      setEmails(emailData.data);
    }
    try {
      fetchEmails();
    } catch (err) {
      setError(err.message);
    } finally {
      setEmailsLoading(false);
    }
        
  }, []);

  useEffect(() => {
    console.log('Emails state updated:', emails); // Debugging
  }, [emails]);

  const getMoreEmails = async () => {
    let searchLimit = limit + 5;
    setLimit(searchLimit);
    console.log(limit);
    const emailData = await getEmails(searchLimit, customer.email, '60f5b664-c390-46f0-9609-2cb66a7f681b');
    setEmails(emailData.data);
  };

  const openModal = (email) => {
    setSelectedEmail(email);
  };

  const closeModal = () => {
    setSelectedEmail(null);
  };

  if (loading) return <div className=' w-full h-screen mt-18 flex justify-center '><div className='loader'></div></div>;
  if (error) return <p>Error: {error}</p>;


  const chartdata = [
    {
      date: 'Jan 22',
      'Price': 2338,
    },
    {
      date: 'Feb 22',
      'Price': 2103,
    },
    {
      date: 'Mar 22',
      'Price': 2194,
    },
    {
      date: 'Apr 22',
      'Price': 2108,
    },
    {
      date: 'May 22',
      'Price': 1812,
    },
    {
      date: 'Jun 22',
      'Price': 1726,
    },
    {
      date: 'Jul 22',
      'Price': 1982,
    },
    {
      date: 'Aug 22',
      'Price': 2012,
    },
    {
      date: 'Sep 12',
      'Price': 2342,
    },
    {
      date: 'Oct 22',
      'Price': 2473,
    },
    {
      date: 'Nov 14',
      'Price': 3848,
    },
    {
      date: 'Dec 22',
      'Price': 3736,
    },
  ];

  const chartCategories = ['Price'];


  const pieChartData = [
    {
      name: 'Refrigerator',
      value: 800,
    },
    {
      name: 'Dishwasher',
      value: 190,
    },
    {
      name: 'Oven',
      value: 400,
    },
    
  ];

  const serviceData =[
    {
      name: 'Refrigerator',
      totalJobs: 4,
    },
    {
      name: 'Dishwasher',
      totalJobs: 1,
    },
    {
      name: 'Oven',
      totalJobs: 2,
    },
    
  ];

  return (
    <div className=' grid grid-cols-1 md:grid-cols-7 gap-4 w-[100%] md:w-[100%] px-1 md:py-5 md:px-9'>
      <div className='md:col-start-1 md:col-end-6'>
        <div className='flex flex-col w-full'>
          <MapComponent />
          <CustomerAddresses customer={customer}/>
          <div className='grid grid-cols-1 md:grid-cols-3 justify-items-start my-8 px-3 items-center justify-center gap-x-4'>
            {/* Total Jobs */}
            <Card
              className="mx-auto max-w-xs"
              decoration="top"
              decorationColor="blue"
            >
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Total Jobs</p>
              <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">12</p>
            </Card>


            {/* Total Paid */}

            <Card
              className="mx-auto max-w-xs"
              decoration="top"
              decorationColor="blue"
            >
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Total Paid</p>
              <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$3421.00</p>
            </Card>


            {/* Total Attatchments */}


            <Card
              className="mx-auto max-w-xs"
              decoration="top"
              decorationColor="blue"
            >
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Total Attatchments</p>
              <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">21</p>
            </Card>


          </div>
        </div>
        

        <div className='my-14'>
          <LineChartComponent categories={chartCategories} data={chartdata} />
        </div>

        <div className='grid md:grid-cols-2 my-32 gap-6'>
          <div>
            <DonutChartComponent data={pieChartData}/>
          </div>
          
          <div>
            <ServiceCategoriesTable data={serviceData} />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-3 items-center justify-items-center'>
        {/* Recent Jobs */}
        <div 
          className='w-[100%] shadow-lg flex flex-col justify-center items-center bg-white h-[100%]'>
            <RecentJobs />
        </div>

        
        </div>

        {/* Recent Inboxes */}
        
        <Card 
          decoration='top' 
          decorationColor='blue' 
          className='w-[100%] shadow-lg flex flex-col justify-center items-center bg-white'>
        <div className='flex flex-col justify-center w-[100%]'>
            <div className='bg-white text-blue-500 px-4 py-1 text-3xl'>Client Emails</div>
        </div>
        <div className='grid grid-cols-3 md:h-[24rem] border-2 border-slate-50 w-[100%]'>

          {/* Email list */}
          <div className='col-span-1 border-2 border-white border-r-slate-50 shadow-sm overflow-y-scroll'>

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
          <div className='col-span-2 overflow-y-scroll border-2 border-slate-100 mx-2 my-2'>
              {/* Render the modal */}
              <EmailModal email={selectedEmail} isOpen={selectedEmail !== null} onClose={closeModal} />
          </div>
          </div>
        </Card>

        {/* Documents */}
        <div className='w-full flex flex-col justify-center items-center my-12 bg-white'>
            <RecentActivity />
        </div>
      </div>
      
      <div className='md:col-start-6 md:col-end-8'>
        {/* Customer Information */}
        <CustomerInformation />
        <CustomerPayment />
        <CustomerBillingSummary />

        {/* Recent Contacts */}
        <Card 
          decoration='top' 
          decorationColor='blue' 
          className='w-[100%] shadow-lg flex flex-col justify-center items-center bg-white'>
            <RecentContacts />
        </Card>
      </div>
        

        


        
        


        
    </div>
  )
}

export default Page
