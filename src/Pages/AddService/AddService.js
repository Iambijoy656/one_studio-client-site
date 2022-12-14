import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext)

    const handleAddService = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const imageURL = form.imageURL.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {

            title,
            price,
            img: imageURL,
            description
        }



        fetch('https://one-studio-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Add Service Successfully')
                    form.reset()

                }
            })
            .catch(error => console.error(error))





    }




    return (
        <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-sky-400 rounded-md shadow-md my-10">
            <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Service Add</h2>

            <p class="mt-3 text-center text-gray-600 dark:text-gray-400">
                Add services
            </p>


            <form onSubmit={handleAddService} class="mt-6 ">
                <div class="items-center -mx-2 md:flex">
                    <div class="w-full mx-2">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Title</label>

                        <input name='title' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" placeholder='tilte' required />
                    </div>

                    <div class="w-full mx-2 mt-4 md:mt-0">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Image URL</label>

                        <input name='imageURL' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" placeholder='Image URL' required />
                    </div>
                    <div class="w-full mx-2 mt-4 md:mt-0">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Price</label>

                        <input name='price' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" placeholder='price' required />
                    </div>

                </div>

                <div class="w-full mt-4">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Description</label>

                    <textarea name='description' class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" required></textarea>
                </div>

                <div class="flex justify-center mt-6">
                    <button class="px-4 py-2 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add
                        Service
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddService;