'use client'
import { useEffect, useState } from 'react';

const ReviewsComponent = ({ reviews,id,reload }) => {
  const [sortedReviews, setSortedReviews] = useState(reviews);
  const [sortType, setSortType] = useState('dateNewest'); // Default sort by newest date
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  // Function to handle sorting
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    setSortType(sortBy);

    const sortedArray = [...reviews].sort((a, b) => {
      if (sortBy === 'dateNewest') {
        return new Date(b.date) - new Date(a.date); // Sort by newest date
      } else if (sortBy === 'dateOldest') {
        return new Date(a.date) - new Date(b.date); // Sort by oldest date
      } else if (sortBy === 'ratingHighest') {
        return b.rating - a.rating; // Sort by highest rating
      } else if (sortBy === 'ratingLowest') {
        return a.rating - b.rating; // Sort by lowest rating
      }
    });

    setSortedReviews(sortedArray);
  };

  const deleteReview = async(review)=>{
    console.log(review)
    try{
    const res = await fetch(`${apiUrl}/api/deleteReview/${id}`, {method: 'POST', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },body: JSON.stringify({id,review}), });
    console.log(res);
    const data = res.json();
    console.log(data);
    alert("Review deleted successfully")
    reload();
  }
  catch(e){
    console.log(e);
    alert("Failed to delete review , try again")
  }
    
  }

  useEffect(()=>{

    const sortedArray = [...reviews].sort((a, b) => {
      if (sortType === 'dateNewest') {
        return new Date(b.date) - new Date(a.date); // Sort by newest date
      } else if (sortType === 'dateOldest') {
        return new Date(a.date) - new Date(b.date); // Sort by oldest date
      } else if (sortType === 'ratingHighest') {
        return b.rating - a.rating; // Sort by highest rating
      } else if (sortType === 'ratingLowest') {
        return a.rating - b.rating; // Sort by lowest rating
      }
    });

    setSortedReviews(sortedArray);

  },[reviews])

  return (
    <div className="p-4">
      {/* Sort Dropdown */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Sort by:</label>
        <select
          value={sortType}
          onChange={handleSortChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="dateNewest">Date (Newest)</option>
          <option value="dateOldest">Date (Oldest)</option>
          <option value="ratingHighest">Rating (Highest)</option>
          <option value="ratingLowest">Rating (Lowest)</option>
        </select>
      </div>

      {/* Display Sorted Reviews */}
      <ul className="space-y-4">
        {sortedReviews.map((review, index) => (
                <div key={index} className="border-b border-gray-300 pb-4 mb-4">
                <p className="font-bold">{review.reviewerName}</p>
                <p className="text-gray-600 text-sm mb-2">{review.date}</p>
                <p className="text-gray-800 mb-2">{review.comment}</p>
                <div className="text-yellow-500">
                  {'★'.repeat(Math.round(review.rating))}
                  {'☆'.repeat(5 - Math.round(review.rating))}
                  <button onClick={()=>deleteReview(review)} className="bg-red-800 text-white px-4 relative left-[80%] py-2 rounded">Delete</button>
                </div>
                
              </div>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsComponent;
