import { useState } from 'react'
import { shipmentApi } from '../api/shipmentApi'
import TrackingCard from '../components/TrackingCard'
import PageLayout from '../components/PageLayout'

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [shipment, setShipment] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTrack = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await shipmentApi.track(trackingNumber)
      setShipment(response.data)
    } catch (error) {
      setError('Shipment not found')
      setShipment(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout>
      <section className="section-block">
        <p className="pill pill--success">Shipment tracking</p>
        <h1 className="section-title">Know exactly where everything is.</h1>
        <p className="section-subtitle">Drop a tracking ID below for instant status, ETA, and route context.</p>

        <form className="tracking-form" onSubmit={handleTrack}>
          <input
            className="input-field tracking-input"
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="e.g. TRK12345"
            required
          />
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Tracking...' : 'Track'}
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {shipment && <TrackingCard shipment={shipment} />}
      </section>
    </PageLayout>
  )
}

export default Tracking


