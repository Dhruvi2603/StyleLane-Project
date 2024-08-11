import React, { useState } from 'react';

const Rating = ({ productName }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reviews, setReviews] = useState([]);

    const handleSubmitReview = (e) => {
        e.preventDefault();
        const newReview = {
            rating,
            review,
            name,
            email
        };
        setReviews([...reviews, newReview]);
        // Clear form fields
        setRating(0);
        setReview("");
        setName("");
        setEmail("");
    }

    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-2">Reviews ({reviews.length})</h2>
            {reviews.length === 0 ? (
                <p>There are no reviews yet.</p>
            ) : (
                reviews.map((review, index) => (
                    <div key={index} className="border p-4 my-4">
                        <p><strong>{review.name}</strong> says:</p>
                        <p>{review.review}</p>
                        <p>Rating: {review.rating}</p>
                    </div>
                ))
            )}
            <h3 className="text-lg font-semibold mt-4">Be the first to review "{productName}"</h3>
            <form onSubmit={handleSubmitReview} className="mt-4">
                <div className="mb-4">
                    <label htmlFor="rating" className="block font-semibold">Your rating *</label>
                    <input type="number" id="rating" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required className="border rounded-md px-2 py-1 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="review" className="block font-semibold">Your review *</label>
                    <textarea id="review" value={review} onChange={(e) => setReview(e.target.value)} required className="border rounded-md px-2 py-1 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold">Name *</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="border rounded-md px-2 py-1 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-semibold">Email *</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border rounded-md px-2 py-1 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    );
}

export default Rating;
