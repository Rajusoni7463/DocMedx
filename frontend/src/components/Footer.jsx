import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10 '>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ---left section--- */}
            <div>
            <h1 className=' mb-5 w-44 cursor-pointer text-primary font-bold text-[36px]'>DocMedx</h1>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laboriosam nobis commodi, illo porro minus hic quia voluptas repellendus consequuntur labore? Iusto culpa voluptate quas blanditiis quo illo atque odio!</p>
            </div>
            {/* ---center section--- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* ---right section-- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-7463840415</li>
                    <li>soniraju13344@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/* ------copy rigth text-------- */}
            <div>
               <hr />
               <p className='py-5 text-sm text-center'>Copyright 2024@ DocMedx - All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer