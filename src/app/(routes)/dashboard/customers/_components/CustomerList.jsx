import React, { useContext, useEffect, useRef, useState } from 'react';
import { Payment, columns } from "./customerdata/columns";
import BasicTable from '../../_components/data-table';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { SearchSortContext } from '@/src/contexts/SearchSortProvider';
import SearchSort from '../../_components/SearchSort';
import {SortByContext} from '../../../../../contexts/SortByProvider'

function CustomerList() {
  const customers = [
    {
      id: 1,
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'info@email.com',
      category: 'RESIDENTIAL',
      notes: 'Schedule appointments during the morning only',
    },
    {
      id: 2,
      name: 'Mary Doe',
      phone: '123-456-7890',
      email: 'info@email.com',
      category: 'RESIDENTIAL',
      notes: 'Schedule appointments during the morning only',
    },
    {
      id: 3,
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'info@email.com',
      category: 'COMMERCIAL',
      notes: 'Schedule appointments during the morning only',
    },
    {
      id: 4,
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'callus@email.com',
      category: 'RESIDENTIAL',
      notes: 'Schedule appointments during the morning only',
    },
    {
      id: 5,
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'info@email.com',
      category: 'RESIDENTIAL',
      notes: 'Schedule appointments during the morning only',
    },
    {
      id: 6,
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'info@email.com',
      category: 'RESIDENTIAL',
      notes: 'Schedule appointments during the morning only',
    },
    {
      id: 7,
      name: 'John Doe',
      phone: '222-456-7890',
      email: 'info@email.com',
      category: 'RESIDENTIAL',
      notes: 'Schedule appointments during the morning only',
    }
  ];

  const colNames = [
    " ",
    "NAME",
    "PHONE",
    "EMAIL",
    "CATEGORY",
    "NOTES"

  ]


  // Filtered list for search
  const [filteredList, setFilteredList] = useState([...customers]);

  // Input query in search field
  const {searchQuery} = useContext(SearchSortContext);

  // Filter preference
  const {sortBy} = useContext(SortByContext);

  // Current page
  const [getCurrentPage, setCurrentPage] = useState(1);

  // Get list to splice
  const [listToSplice, setListToSplice] = useState([...customers])

  // Customer items per page
  const customersPerPage = 10;

  // Current page
  let currentPage = getCurrentPage;

  // Calc number of pages
  let numberOfPages = Math.ceil(listToSplice.length / customersPerPage);

  // Track pages in array
  let numberOfPagesArr = [];

  // Initialize first page
  let firstPage = 1;

  // Index for first customer item and last customer item
  let firstCustomerIndex = (currentPage * customersPerPage) - customersPerPage;
  let lastCustomerIndex = currentPage * customersPerPage;

  // Get list for customers on one page
  let shortCustomersList = listToSplice.slice(firstCustomerIndex, lastCustomerIndex);

  // Add page numbers to trac pages array
  let firstPageArr = 1;
  for(let i = 0; i < numberOfPages; i++) {
    numberOfPagesArr.push(firstPageArr);
    firstPageArr++
  }
  

  
 
  // Search for customers
  const searchCustomers = () => {
    // Get current value in search input
    let query = searchQuery;
    if(query.length > 0) {
      query = query.toLowerCase();
    }
    let filterList = [];

    // Use searchBy value to search customer list
    if(sortBy == 'name') {
        filterList = customers.filter((cx) =>
            cx.name.toLowerCase().includes(query)
          );
    } else if(sortBy == 'phone') {
        filterList = customers.filter((cx) =>
            cx.phone.includes(query)
          );
    } else if(sortBy == 'email') {
        filterList = customers.filter((cx) =>
            cx.email.includes(query)
          );
    } else if(sortBy == 'category') {
        filterList = customers.filter((cx) =>
            cx.category.toLowerCase().includes(query)
          );
    }

    // Update filtered list with search results
    setFilteredList(filterList);
    setListToSplice([...filterList])
  };



  // Update UI if current page is changed
  useEffect(() => {
    console.log(getCurrentPage)
  }, [getCurrentPage, listToSplice, sortBy, searchQuery])



  return (
    <div>
        
        <div className='w-full flex flex-col md:flex-row justify-between items-center'>
            
            <SearchSort searchList={searchCustomers} optionsArray={['name', 'phone', 'email', 'category']} />
            <div className='flex items-center gap-2'>

                {/* Add customer btn */}
                <a href='/dashboard/customers/add-customer'><button className='btn'>Create Customer</button></a>
                <a href='/dashboard/customers/add-customer'><button className='btn'>Import Customers</button></a>
            </div>
        </div>
        
      
      
        <hr />
      {/* Customers list */}
      <div className="my-12">
        {searchQuery?.current?.value ? <BasicTable rows={shortCustomersList} colNames={colNames} path="/dashboard/customers"/> : <BasicTable rows={shortCustomersList} colNames={colNames}  path="/dashboard/customers"/>}
      </div>
      
      <div className='flex justify-center'>
        {/* Page numbers */}
        {numberOfPagesArr.map((page) => (
            <button key={page} className={`mx-2 my-4 hover:text-blue-500 cursor-pointer ${currentPage == page ? "underline" : ''}`} value={page} onClick={(event) => setCurrentPage(event.target.value)}>{page}</button>
        ))}
      </div>
      
    </div>
  );
}

export default CustomerList;
