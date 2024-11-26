import { Link, Outlet } from 'react-router'

export function Example() {
  return (
    <div className="p-4">
      <Link to="/" className="text-blue-600 hover:underline">
        Back to home
      </Link>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}
