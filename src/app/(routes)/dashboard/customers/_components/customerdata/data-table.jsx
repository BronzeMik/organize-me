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

export default function BasicTable({rows}) {
  const route = useRouter();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow className="bg-blue-800 text-white">
            <TableCell className="text-white">NAME</TableCell>
            <TableCell align="right" className="text-white">PHONE</TableCell>
            <TableCell align="right" className="text-white">EMAIL</TableCell>
            <TableCell align="right" className="text-white">CATEGORY</TableCell>
            <TableCell align="right" className="text-white">NOTES</TableCell>
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
                <a href={`/dashboard/customers/${row.id}`} className='hover:underline hover:text-blue-500'>{row.name}</a>
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.notes}</TableCell>
            </TableRow>
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
