import { useState } from 'react';

const ReviewsComponent = ({ reviews }) => {
  const [sortedReviews, setSortedReviews] = useState(reviews);
  const [sortType, setSortType] = useState('dateNewest'); // Default sort by newest date

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
                <p className="font-bold">{review.name}</p>
                <p className="text-gray-600 text-sm mb-2">{review.date}</p>
                <p className="text-gray-800 mb-2">{review.comment}</p>
                <div className="text-yellow-500">
                  {'★'.repeat(Math.round(review.rating))}
                  {'☆'.repeat(5 - Math.round(review.rating))}
                </div>
              </div>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsComponent;
