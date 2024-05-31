import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useRouter} from 'next/navigation'




export default function BasicTable({rows, colNames, path}) {
  const rowNames = Object.keys(rows[0]);
  const route = useRouter();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow className="bg-blue-800 text-white">
            {colNames.map((col, index) => (
              <TableCell key={index} align="center" className="text-white">{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => route.replace(`${path}/${row.id}`)}
              className='hover:bg-slate-200 cursor-pointer h-20'
            >
              {rowNames.map((keyName, index) => (
                <TableCell key={index} align="center">{row[keyName]}</TableCell>
              ))}
            </TableRow>
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
