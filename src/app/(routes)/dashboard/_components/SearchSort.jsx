"use client"
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import {SearchSortContext} from '../../../../contexts/SearchSortProvider';
import {SortByContext} from '../../../../contexts/SortByProvider';

function SearchSort({searchList, optionsArray}) {
  // Filter preference
  const [searchBy, setSearchBy] = useState(null);
  const {searchQuery, setSearchQuery} = useContext(SearchSortContext);
  const {sortBy, setSortBy} = useContext(SortByContext);
  const query = useRef();

  const updateSearch = () => {
    setSearchQuery(query.current.value);
    console.log(searchQuery)
    searchList()
  }
  
  return (
    <div className='flex gap-1 items-start w-full md:w-2/6'>

                {/* Search Customers input */}
                <TextField
                id="standard-search"
                label={sortBy ? `Search by ${sortBy ? sortBy : '...'}` : 'Please select a sort option'}
                type="search"
                variant="standard"
                className='my-6'
                inputRef={query}
                onChange={() => updateSearch(searchList)}
                disabled={sortBy ? false : true}
                />

            {/* Search by drop down */}
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} className='my-4'>
                <InputLabel id="demo-simple-select-filled-label">Search By</InputLabel>
                <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sortBy}
                        label='Search by..'
                        onChange={(event) => setSortBy(event.target.value)}
                    >
                      {optionsArray.map((item, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                      ))}
                </Select>
            </FormControl>
            </div>
  )
}

export default SearchSort
