import { useState, useEffect } from 'react'
import { ratingApi } from '../api/ratingApi'
import RatingStars from '../components/RatingStars'
import PageLayout from '../components/PageLayout'

const Ratings = () => {
  const [ratings, setRatings] = useState([])
  const [averageRating, setAverageRating] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRatings()
    fetchAverage()
  }, [])

  const fetchRatings = async () => {
    try {
      const response = await ratingApi.getAll()
      setRatings(response.data)
    } catch (error) {
      console.error('Failed to fetch ratings:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchAverage = async () => {
    try {
      const response = await ratingApi.getAverage()
      setAverageRating(response.data.average)
    } catch (error) {
      console.error('Failed to fetch average rating:', error)
    }
  }

  return (
    <PageLayout>
      <section className="section-block">
        <p className="pill pill--success">Voice of the customer</p>
        <h1 className="section-title">Ratings & feedback</h1>
        <p className="section-subtitle">Keep a finger on service quality and act fast on insights.</p>

        <div className="card section-block">
          <h2>Average Rating: {averageRating.toFixed(1)} / 5.0</h2>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="card-grid">
            {ratings.map((rating) => (
              <article key={rating.id} className="card rating-card">
                <RatingStars shipmentId={rating.shipmentId} initialRating={rating.rating} />
                <p>{rating.comment || 'No comment'}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </PageLayout>
  )
}

export default Ratings


