import Navbar from './Navbar'
import Footer from './Footer'

const PageLayout = ({ children, variant = 'default' }) => {
  return (
    <div className={`page-shell page-shell--${variant}`}>
      <Navbar />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout

