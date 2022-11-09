import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUserCircle, FaStar, } from "react-icons/fa";
import ReviewForm from '../ReviewForm/ReviewForm';

const Details = () => {
    const serviceDetails = useLoaderData();
    const { _id, title, img, price, description } = serviceDetails

    return (

        <div>
            <section>
                <div className="">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">{title}</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">{description}</p>
                        <div className="flex flex-wrap justify-center">
                            <h2 className='px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50'>Price : ${price}</h2>

                        </div>
                    </div>
                </div>
                <img src={img} alt="" className="w-3/5 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
            </section>
            <section className='my-10 text-center'>
                <Link to='/reviewform'>
                    <button class="px-5 py-3 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Your
                        Review
                    </button>
                </Link>
            </section>
        </div>

    );
};

export default Details;