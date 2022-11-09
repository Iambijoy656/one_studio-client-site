import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const ReviewForm = () => {
    const { user } = useContext(AuthContext)



    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'Unregistered';
        const message = form.message.value;
    }






    return (
        <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-sky-400 rounded-md shadow-md my-10">
            <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Give Review</h2>

            <p class="mt-3 text-center text-gray-600 dark:text-gray-400">
                Please Give a Review for My services
            </p>


            <form onSubmit={handleReview} class="mt-6 ">
                <div class="items-center -mx-2 md:flex">
                    <div class="w-full mx-2">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>

                        <input name='name' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                    </div>

                    <div class="w-full mx-2 mt-4 md:mt-0">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>

                        <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" defaultValue={user?.email} readOnly />
                    </div>
                    <div class="w-full mx-2 mt-4 md:mt-0">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Give Star</label>

                        <input name='rating' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" placeholder='3 or 4 or 5' />
                    </div>

                </div>

                <div class="w-full mt-4">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>

                    <textarea name='message' class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
                </div>

                <div class="flex justify-center mt-6">
                    <button class="px-4 py-2 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send
                        Review
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ReviewForm;