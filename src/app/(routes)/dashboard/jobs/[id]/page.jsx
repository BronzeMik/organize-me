"use client"
import React, { useContext, useState, useEffect } from 'react';
import CustomerInformation from '../../_components/CustomerInformation';
import SearchSort from '../../_components/SearchSort';
import JobOverview from '../../_components/JobOverview';
import { SearchSortContext } from '../../../../../contexts/SearchSortProvider';
import { SortByContext } from '../../../../../contexts/SortByProvider';

function Page() {
  const jobs = [
    {
      job_title: 'Kitchen Renovation',
      job_id: 1,
      category: 'RESIDENTIAL',
      start_date: '01/01/2024',
      end_date: '02/01/2024',
      status: 'IN PROGRESS',
      last_update: '01/12/2024',
      description: 'Full kitchen renovation including appliances.',
      progress: 48,
    },
    {
      job_title: 'Kitchen Renovation',
      job_id: 2,
      category: 'RESIDENTIAL',
      start_date: '01/01/2024',
      end_date: '02/01/2024',
      status: 'IN PROGRESS',
      last_update: '01/12/2024',
      description: 'Full kitchen renovation including appliances.',
      progress: 99,
    },
    {
      job_title: 'Kitchen Renovation',
      job_id: 3,
      category: 'RESIDENTIAL',
      start_date: '01/01/2024',
      end_date: '02/01/2024',
      status: 'IN PROGRESS',
      last_update: '01/12/2024',
      description: 'Full kitchen renovation including appliances.',
      progress: 55,
    },
    {
      job_title: 'Kitchen Renovation',
      job_id: 4,
      category: 'COMMERCIAL',
      start_date: '01/01/2024',
      end_date: '02/01/2024',
      status: 'NOT STARTED',
      last_update: '01/12/2024',
      description: 'Full kitchen renovation including appliances.',
      progress: 5,
    },
    {
      job_title: 'Bathroom Renovation',
      job_id: 1,
      category: 'RESIDENTIAL',
      start_date: '01/01/2024',
      end_date: '02/01/2024',
      status: 'IN PROGRESS',
      last_update: '01/12/2024',
      description: 'Full kitchen renovation including appliances.',
      progress: 88,
    }
  ];

  const { searchQuery } = useContext(SearchSortContext);
  const { sortBy } = useContext(SortByContext);

  const customers = []; // You need to define `customers` array

  // Filtered list for search
  const [filteredList, setFilteredList] = useState([]);

  // Get list to splice
  const [listToSplice, setListToSplice] = useState();

  useEffect(() => {
    searchJobs();
  }, [searchQuery, sortBy]);

  const searchJobs = () => {
    // Search for customers
    let query = searchQuery;
    if (query.length > 0) {
      query = query.toLowerCase();
    }
    let filterList = [];

    // Use searchBy value to search customer list
    if (sortBy === 'job title') {
      filterList = jobs.filter((cx) => cx.job_title.toLowerCase().includes(query));
    } else if (sortBy === 'job id') {
      filterList = jobs.filter((cx) => cx.job_id.toString().includes(query));
    } else if (sortBy === 'start date') {
      filterList = jobs.filter((cx) => cx.start_date.includes(query));
    } else if (sortBy === 'end date') {
      filterList = jobs.filter((cx) => cx.end_date.includes(query));
    } else if (sortBy === 'category') {
      filterList = jobs.filter((cx) => cx.category.toLowerCase().includes(query));
    } else if (sortBy === 'status') {
      filterList = jobs.filter((cx) => cx.status.toLowerCase().includes(query));
    }

    // Update filtered list with search results
    setFilteredList([...filterList]);
    setListToSplice([...filterList]);
  };

  return (
    <div className='w-[100%] md:w-[90%] px-2 md:py-5 md:px-9'>
      {/* Customer information */}
      <CustomerInformation />

      {/* Search and Sort Input */}
      <div className='flex justify-start w-full p-4 mt-10'>
        <SearchSort searchList={searchJobs} optionsArray={['job title', 'job id', 'category', 'start date', 'end date', 'status']} />
      </div>

      {/* List Jobs */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
        {filteredList.length > 0 ?  filteredList.map((job, index) => (
          <JobOverview key={job.job_id} job={job} />
        )) : jobs.map((job, index) => (
          <JobOverview key={job.job_id} job={job} />
        ))}
      </div>
      
    </div>
  );
}

export default Page;
