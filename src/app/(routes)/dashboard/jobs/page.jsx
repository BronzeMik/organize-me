import React from 'react'

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

  const columns = [
      "job_title",
      "job_id",
      "category",
      "start_date",
      "end_date",
      "status",
      "last_update",
      "description",
      "progress",
  ]
  return (
    <div>
      <BasicTable rows={jobs} colNames=
    </div>
  )
}

export default Page
