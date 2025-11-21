const TrackingCard = ({ shipment }) => {
  return (
    <article className="card tracking-card">
      <div className="status-pill">{shipment.status}</div>
      <h3>Tracking ID: {shipment.trackingNumber}</h3>
      <p>
        <strong>Origin:</strong> {shipment.origin}
      </p>
      <p>
        <strong>Destination:</strong> {shipment.destination}
      </p>
      <p>
        <strong>Estimated Delivery:</strong> {shipment.estimatedDelivery}
      </p>
    </article>
  )
}

export default TrackingCard



