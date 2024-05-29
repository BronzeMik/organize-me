"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useRouter} from 'next/navigation'


// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function RecentContactsTable({rows}) {
  const route = useRouter();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow className="bg-blue-800 text-white">
          <TableCell className="text-white" style={{color: '#fff'}}>TYPE</TableCell>
            <TableCell align="center" className="text-white" style={{color: '#fff'}}>DATE</TableCell>
            <TableCell align="center" className="text-white" style={{color: '#fff'}}>COMMENTS</TableCell>
            <TableCell align="center" className="text-white" style={{color: '#fff'}}>JOB ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => route.replace(`/dashboard/customers/${row.id}`)}
              className='hover:bg-slate-200 cursor-pointer h-20'
            >
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.comments}</TableCell>
              <TableCell align="center">
                <a href={`/dashboard/customers/${row.id}`} className='hover:underline hover:text-blue-500'>{row.job_id}</a>
            </TableCell>
            </TableRow>
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
