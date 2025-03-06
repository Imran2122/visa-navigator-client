import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyVisaApplications = () => {

    const user=useLoaderData()
    return (
        <div className='mt-10'>
            {user.length}
        </div>
    );
};

export default MyVisaApplications;