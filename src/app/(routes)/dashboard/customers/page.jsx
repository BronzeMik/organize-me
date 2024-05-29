"use client"
import CustomerList from './_components/CustomerList'



function page() {

  return (
    <div className='p-7 w-[100%] px-4 md:px-0 md:w-[80%]'>
        
        <CustomerList />
        {/* <div className='flex justify-center'>
          <button className='btn'>See All Customers</button>
        </div> */}

    </div>
  )
}

export default page
