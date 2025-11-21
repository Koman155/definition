import { useState, useEffect } from 'react'
import { paymentApi } from '../api/paymentApi'
import ProtectedRoute from '../components/ProtectedRoute'
import PageLayout from '../components/PageLayout'

const Payments = () => {
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPayments()
  }, [])

  const fetchPayments = async () => {
    try {
      const response = await paymentApi.getAll()
      setPayments(response.data)
    } catch (error) {
      console.error('Failed to fetch payments:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ProtectedRoute>
      <PageLayout>
        <section className="section-block">
          <p className="pill pill--success">Financial overview</p>
          <h1 className="section-title">Payments</h1>
          <p className="section-subtitle">Easily reconcile logistics payments and uploaded proofs.</p>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="card-grid">
              {payments.map((payment) => (
                <article key={payment.id} className="card">
                  <h3>Payment #{payment.id}</h3>
                  <p>
                    <strong>Amount:</strong> ${payment.amount}
                  </p>
                  <p>
                    <strong>Status:</strong> {payment.status}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </PageLayout>
    </ProtectedRoute>
  )
}

export default Payments


