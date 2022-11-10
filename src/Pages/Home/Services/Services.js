import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();

    const fetureService = services.slice(0, 3);




    return (
        <div className='text-center my-16'>
            <h2 className='text-5xl text-gray-800'>My Services</h2>
            <p className='my-3 text-gray-600'>I work independently and specialize in personal photography. In particular, these are significant <br /> events for you or personal photoshoots.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-9/12 mx-auto mt-7'>
                {
                    fetureService.map(service => <ServiceCard
                        key={service._id}
                        service={service}


                    ></ServiceCard>)
                }
            </div>

            <div className='text-center my-5 mt-14'>
                <Link to='/services'>
                    <button className="btn bg-blue-900">Show all Services</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;