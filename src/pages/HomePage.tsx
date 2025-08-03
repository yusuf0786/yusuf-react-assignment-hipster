"use client"
// import { useTheme } from "../contexts/ThemeContext"
import { ProductCard } from "../components/ProductCard"
import { useProducts } from "../hooks/useProducts"
import { Loader2Icon, AlertCircleIcon, WifiOffIcon } from "../components/Icons"

export default function HomePage() {
  // const { theme } = useTheme()
  const { products, loading, error, usingFallback } = useProducts()

  if (loading) {
    return (
      <div className="loading-container">
        <Loader2Icon className="loading-spinner" />
        <p>Loading products...</p>
      </div>
    )
  }

  return (
    <div className="page-content">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to ThemeApp</h1>
        <p className="hero-description">
          Experience our amazing multi-theme interface with three distinct designs. Switch between minimalist, dark
          sidebar, and colorful card layouts.
        </p>
        <button className="hero-button">Get Started</button>
      </section>

      {/* Connection Status Banner */}
      {(error || usingFallback) && (
        <div className="connection-banner">
          <div className="connection-status">
            {usingFallback ? (
              <>
                <WifiOffIcon className="connection-icon" />
                <span>Using offline data - API unavailable</span>
              </>
            ) : (
              <>
                <AlertCircleIcon className="connection-icon" />
                <span>{error}</span>
              </>
            )}
          </div>
        </div>
      )}

      <section className="products-section">
        <h2 className="section-title">
          Featured Products {usingFallback && <span className="offline-badge">Offline Mode</span>}
        </h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Key Features</h2>
        <ul className="features-list">
          <li className="feature-item">🎨 Three unique themes with different layouts</li>
          <li className="feature-item">📱 Fully responsive design</li>
          <li className="feature-item">💾 Theme persistence across sessions</li>
          <li className="feature-item">🔄 Smooth theme transitions</li>
          <li className="feature-item">🛡️ TypeScript for type safety</li>
          <li className="feature-item">📡 Offline fallback support</li>
        </ul>
      </section>
    </div>
  )
}
