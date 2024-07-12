import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
  } from '@tremor/react';
  
  export default function TableHero({data}) {
    return(
    <div className="mx-auto max-w-2xl">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Service</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Total
            </TableHeaderCell>
          </TableRow>
        </TableHead>
  
        <TableBody>
            {data.map((service, index) => (
            <TableRow>
                <TableCell>{service?.name}</TableCell>
                <TableCell className="text-right">{service?.totalJobs}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )};
