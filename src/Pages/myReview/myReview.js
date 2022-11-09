import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Context/AuthProvider';
import ReviewCart from './ReviewCart';

const MyReview = () => {
    const { user, loading } = useContext(AuthContext);
    const [reviews, setReview] = useState({})



    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))

    }, [user?.email])

    return (
        <div>
            <h2 className='text-5xl text-center font-semibold my-5'>Your {reviews.length} Reviews </h2>
            <div >
                {
                    reviews.map(review => <ReviewCart
                        key={review._id}
                        review={review}
                    >

                    </ReviewCart>)
                }
            </div>

        </div>
    );
};

export default MyReview;