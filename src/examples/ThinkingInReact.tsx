import { ReactNode } from 'react'

type Product = {
  category: string
  price: string
  stocked: boolean
  name: string
}
const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
]

function ProductCategoryRow({ category }: Pick<Product, 'category'>) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  )
}

function ProductRow({ product }: { product: Product }) {
  const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProductTable({ products }: { products: Product[] }) {
  const rows: ReactNode[] = []
  let lastCategory: string

  products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
    }
    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  )
}

function FilterableProductTable({ products }: { products: Product[] }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}

export function ThinkingInReact() {
  return (
    <div className="flex flex-col">
      <FilterableProductTable products={PRODUCTS} />
      <div className="py-4">
        <hr />
      </div>
      <img src="https://react.dev/images/docs/s_thinking-in-react_ui_outline.png" />
    </div>
  )
}
