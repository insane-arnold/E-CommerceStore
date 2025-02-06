import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src='https://image-cdn.hypb.st/https%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F2d%2Fb8%2FOdd_Future_Tee_White_1_2-8ecc550d85b5ac96164e50400aa0.jpg?fit=max&w=720&q=90' alt=''/>
        </div>
        <div className='p4'>
            <h3 className='text-lg font-medium text-gray-900'>Odd Future</h3>
            <p className='mt-2 text-sm text-gray-500'>White OF Watermelon Donut T-Shirt</p>
        </div>
    </div>
  )
}

export default HomeSectionCard
