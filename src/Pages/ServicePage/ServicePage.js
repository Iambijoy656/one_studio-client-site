import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Home/Services/ServiceCard';

const ServicePage = () => {
    const services = useLoaderData();




    return (
        <div>
            <h2 className='text-6xl text-gray-700 text-center font-semibold mt-5'>Focus Service</h2>
            <p className='text-center text text-gray-600  text-xl w-9/12 mx-auto font-semibold my-5'>To all my clients, we offer a wide range of quality services in the field of wedding photo and video shooting. When you need to make the right impression, you need a professional with the vision to make it a reality. I professional who can provide all these services and more.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-9/12 mx-auto mt-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}


                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServicePage;