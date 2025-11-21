import { useState } from 'react'
import { commentApi } from '../api/commentApi'

const CommentBox = ({ shipmentId }) => {
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await commentApi.create({ shipmentId, content: comment })
      setComment('')
      alert('Comment added successfully!')
    } catch (error) {
      alert('Failed to add comment')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="form-card comment-box" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="comment">Leave feedback</label>
        <textarea
          id="comment"
          className="input-field"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          rows="4"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit comment'}
      </button>
    </form>
  )
}

export default CommentBox



