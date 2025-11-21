import { useState } from 'react'
import { ratingApi } from '../api/ratingApi'

const RatingStars = ({ shipmentId, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating)
  const [hover, setHover] = useState(0)

  const handleRating = async (value) => {
    setRating(value)
    try {
      await ratingApi.create({ shipmentId, rating: value })
    } catch (error) {
      console.error('Failed to submit rating:', error)
    }
  }

  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="rating-star"
          onClick={() => handleRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{ color: star <= (hover || rating) ? '#fbbf24' : '#d1d5db' }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default RatingStars



