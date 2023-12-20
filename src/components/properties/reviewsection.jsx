import React, {useState, useEffect, useContext} from 'react'
import { Rating } from "@material-tailwind/react";
import instance from '../../hooks/useRefreshToken';
import { AuthContext } from '../authentication/AuthProvider';

const Reviewsection = ({ propertyId }) => {
    const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const user = useContext(AuthContext).user;
  const token = localStorage.getItem('accessToken');

  const property_id = propertyId;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reviewData = {
      property_id,
      rating,
      reviewText
    };

    try {
      const response = await instance.post('/api/reviews', reviewData, {
        headers: { Authorization: `Bearer ${token}` }, // Assuming the user object has a token property
      });

      // Handle response...
    } catch (error) {
      console.error(error);
    }
  };


    useEffect(() => {
        const fetchReviews = async () => {
          try {
            const response = await instance.get(`/api/reviews/get/${propertyId}`); // Replace '/api/reviews' with your actual endpoint
            setReviews(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchReviews();
      }, [propertyId]);
      console.log('reviews ', reviews);
    
  return (
    <div className='w-full pt-5'>
    <div className="bg-gray-950 max-w-full min-h-screen ">
      <div className="px-10 flex flex-col gap-2 p-5 bg-gray-100 text-black">
        <h1 className="py-5 text-lg font-semibold">{reviews.length} Reviews</h1>
        {/* Item Container */}
        <div className="flex flex-col gap-3 mt-3">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div className="flex flex-col gap-4 outline p-4" key={review.review_id}>
                {/* Profile and Rating */}
                <div className="flex justify justify-between">
                  <div className="flex gap-2">
                  <div className="w-7 h-7 text-center rounded-full bg-green-500">{review.first_name.charAt(0)}</div>
                    <span>{review.first_name}</span>
                  </div>
                  <div className="flex p-1 gap-1 text-orange-300">
                  <Rating value={review.rating} readonly />
                  </div>
                </div>
                <div className='w-full'>
                  {review.review_text}
                </div>
                <div className="flex justify-between">
                  <span>{review.date}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                <span>
                posted on {new Date(review.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                </div>
              </div>
            ))
          ) : (
            <p>There are no reviews</p>
          )}
        </div>
            {user.role !== 'owner' ? (
            <div className="mt-10">
                <h2 className="text-lg">Add a review</h2>
                <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label htmlFor="rating" className="block text-lg font-semibold">Rating</label>
                    <Rating unratedColor="amber" ratedColor="amber" onChange={setRating} />
                </div>
                <div className="mt-4">
                    <label htmlFor="review" className="block text-lg font-semibold">Review</label>
                    <textarea id="review" name="review" rows="4" className="w-full mt-2 p-2 border border-gray-300 rounded-md" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
                </div>
                <div className="mt-4">
                    <button type="submit" className="px-4 py-2 bg-green-800 text-white rounded-md">Submit</button>
                </div>
                </form>
            </div>
            ) : (
                <div className="mt-10">
                <p>You are not allowed to review</p>
                </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default Reviewsection