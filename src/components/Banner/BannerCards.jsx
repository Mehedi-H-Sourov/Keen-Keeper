import React from 'react';

const BannerCards = () => {
    return (
        <div className='grid grid-cols-4 gap-6 container mx-auto mb-10 max-w-5xl'>
            <div className='shadow-xl px-6 py-10 bg-base-200 rounded-lg  text-center'>
                <span className='text-xl font-semibold'>10</span>
                <p className='text-gray-500'>Total Friends</p>
            </div>

            <div className='shadow-xl px-6 py-10 bg-base-200 rounded-lg   text-center'>
                <span className='text-xl font-semibold'>3</span>
                <p className='text-gray-500'>On Track</p>
            </div>

            <div className='shadow-xl px-6 py-10 bg-base-200 rounded-lg   text-center'>
                <span className='text-xl font-semibold'>6</span>
                <p className='text-gray-500'>Need Attention</p>
            </div>

            <div className='shadow-xl px-6 py-10 bg-base-200 rounded-lg   text-center'>
                <span className='text-xl font-semibold'>12</span>
                <p className='text-gray-500'>Interactions this month</p>
            </div>

        </div>
    );
};

export default BannerCards;