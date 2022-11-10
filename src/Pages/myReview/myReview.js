import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { AuthContext } from '../../Context/AuthProvider';
import ReviewCart from './ReviewCart';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState([])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure, you want to delete it? ")

        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.error('Deleted Successfully')
                        const remaining = reviews.filter(rvw => rvw._id !== id)
                        setReview(remaining)
                    }
                })
        }



    }



    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('oneStudio-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {

                    return setReview([])

                }

                return res.json()
            })
            .then(data => setReview(data))

    }, [user?.email])

    return (
        <div>
            <h2 className='text-5xl text-center font-semibold my-5'>Your {reviews?.length} Reviews </h2>
            <div >
                {
                    reviews?.map(review => <ReviewCart
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    >

                    </ReviewCart>)
                }
            </div>

        </div>
    );
};

export default MyReview;