import React, { useEffect, useRef, useState } from 'react';
import { Payment, columns } from "./customerdata/columns";
import BasicTable from './customerdata/data-table';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

function CustomerList() {
  const customers = [
    {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'info@email.com',
      category: 'RESIDENTIAL',
      notes: 'Schedule appointments during the morning only',
      id: 1
    },
    {
      name: 'Mary Doe',
      phone: '123-456-7890',
      email: 'info@email.com',
      category: 'RESIDENTIAL',
      notes: 'Schedule appointments during the morning only',
      id: 2
    },
    {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'info@email.com',
      category: 'COMMERCIAL',
      notes: 'Schedule appointments during the morning only',
      id: 3
    },
    {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'callus@email.com',
      category: 'RESIDENTIAL',
      notes: 'Schedule appointments during the morning only',
      id: 4
    },
    {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'info@email.com',
      category: 'RESIDENTIAL',
      notes: 'Schedule appointments during the morning only',
      id: 5
    },
    {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'info@email.com',
      category: 'RESIDENTIAL',
      notes: 'Schedule appointments during the morning only',
      id: 6
    },
    {
      name: 'John Doe',
      phone: '222-456-7890',
      email: 'info@email.com',
      category: 'RESIDENTIAL',
      notes: 'Schedule appointments during the morning only',
      id: 7
    }
  ];

  // Filtered list for search
  const [filteredList, setFilteredList] = useState(customers);

  // Input query in search field
  const searchQuery = useRef(null);

  // Filter preference
  const [searchBy, setSearchBy] = useState(null);

  // Current page
  const [getCurrentPage, setCurrentPage] = useState(1);

  // Get list to splice
  const [listToSplice, setListToSplice] = useState([...customers])

  // Customer items per page
  const customersPerPage = 5;

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
    const query = searchQuery.current?.value.toLowerCase();
    let filterList;

    // Use searchBy value to search customer list
    if(searchBy == 'name') {
        filterList = customers.filter((cx) =>
            cx.name.toLowerCase().includes(query)
          );
    } else if(searchBy == 'phone') {
        filterList = customers.filter((cx) =>
            cx.phone.includes(query)
          );
    } else if(searchBy == 'email') {
        filterList = customers.filter((cx) =>
            cx.email.includes(query)
          );
    } else if(searchBy == 'category') {
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
  }, [getCurrentPage, listToSplice])



  return (
    <div>
        
        <div className='w-full flex flex-col md:flex-row justify-between'>
            <div className='flex justify-between items-start w-full md:w-2/6'>

                {/* Search Customers input */}
                <TextField
                id="standard-search"
                label={searchBy ? `Search by ${searchBy ? searchBy : '...'}` : 'Please select a sort option'}
                type="search"
                variant="standard"
                className='my-6'
                inputRef={searchQuery}
                onChange={searchCustomers}
                disabled={searchBy ? false : true}
                />

            {/* Search by drop down */}
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} className='my-4'>
                <InputLabel id="demo-simple-select-filled-label">Search By</InputLabel>
                <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={searchBy}
                        label='Search by..'
                        onChange={(event) => setSearchBy(event.target.value)}
                    >
                        <MenuItem value='name'>Name</MenuItem>
                        <MenuItem value='phone'>Phone</MenuItem>
                        <MenuItem value='email'>Email</MenuItem>
                        <MenuItem value='category'>Category</MenuItem>
                </Select>
            </FormControl>
            </div>
            <div>

                {/* Add customer btn */}
                <a href='/dashboard/customers/add-customer'><button className='btn'>Create Customer</button></a>
            </div>
        </div>
        
      
      <h2 className='text-xl m-4'>All Customers</h2>
        <hr />
      {/* Customers list */}
      {searchQuery?.current?.value ? <BasicTable rows={shortCustomersList} /> : <BasicTable rows={shortCustomersList} />}
      <div className='flex justify-center'>
        {/* Page numbers */}
        {numberOfPagesArr.map((page) => (
            <button className={`mx-2 my-4 hover:text-blue-500 cursor-pointer ${currentPage == page ? "underline" : ''}`} value={page} onClick={(event) => setCurrentPage(event.target.value)}>{page}</button>
        ))}
      </div>
      
    </div>
  );
}

export default CustomerList;
