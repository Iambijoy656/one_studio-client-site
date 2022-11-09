import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data))

    }, [user.email])

    return (
        <div>
            <h2>You Review Is {reviews.length}</h2>
        </div>
    );
};

export default MyReview;