interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image || "/placeholder.svg?height=200&width=200"}
          alt={product.title}
          className="product-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(product.category)}`
          }}
        />
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description.substring(0, 100)}...</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
