import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

export default function RecentAttatchmentsTable({data}) {
  return(
  <div className="mx-auto">
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell className="">
            Attachment
          </TableHeaderCell>
          <TableHeaderCell className="">
            Date
          </TableHeaderCell>
          <TableHeaderCell className="">
            Job ID
          </TableHeaderCell>
        </TableRow>
      </TableHead>

      <TableBody>
          {data.map((attachment, index) => (
          <TableRow>
              <TableCell>{attachment?.name}</TableCell>
              <TableCell className=""><a href={attachment?.link}>View Document</a></TableCell>
              <TableCell className="">{attachment?.date}</TableCell>
              <TableCell className=""><a href={`/dashboard/jobs/${attachment?.link}`} className='text-blue-500 underline'>{attachment?.jobId}</a></TableCell>

            </TableRow>
          ))}
      </TableBody>
    </Table>
  </div>
)};
