import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServiceCard = ({ service }) => {
    const { _id, img, title, price, description } = service;
    return (
        <div className="max-w-xs rounded-md shadow-md bg-white text-gray-900">

            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                </PhotoView>
            </PhotoProvider>

            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide text-gray-900">{title}</h2>
                    <h3 className='text-xl font-semibold'>Price: ${price}</h3>
                    <p className="text-gray-900 ">{description && description.length > 50 ? description.slice(0, 100) + '...' : description}</p>
                </div>
                <Link to={`/details/${_id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Show Details</button>
                </Link>
            </div>

        </div>
    );
};

export default ServiceCard;



