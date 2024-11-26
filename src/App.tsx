import { Link } from 'react-router'
import { PropsWithChildren } from 'react'

function ExampleLink({ to, children }: PropsWithChildren & { to: string }) {
  return (
    <Link to={to} className="text-blue-600 hover:underline">
      {children}
    </Link>
  )
}

function App() {
  return (
    <div className="p-8">
      <ul className="list-disc">
        <li>
          Décrire l'interface
          <ul className="list-disc pl-4">
            <li>
              <ExampleLink to="examples/components">Components</ExampleLink>
            </li>
            <li>
              <ExampleLink to="examples/jsx">JSX</ExampleLink>
            </li>
            <li>
              <ExampleLink to="examples/props">Props</ExampleLink>
            </li>
            <li>
              <ExampleLink to="examples/conditional">Conditional rendering</ExampleLink>
            </li>
            <li>
              <ExampleLink to="examples/lists">Lists</ExampleLink>
            </li>
          </ul>
        </li>
        <li>
          Ajouter de l'interactivité
          <ul className="list-disc pl-4">
            <li>
              <ExampleLink to="examples/events">Events</ExampleLink>
            </li>
            <li>
              <ExampleLink to="examples/state">State</ExampleLink>
            </li>
            <li>
              <ExampleLink to="examples/inputs">Inputs</ExampleLink>
            </li>
            <li>
              <ExampleLink to="examples/context">Context</ExampleLink>
            </li>
          </ul>
        </li>
        <li>
          Autres fonctionnalités
          <ul className="list-disc pl-4">
            <li>
              <ExampleLink to="examples/effects">Effects</ExampleLink>
            </li>
            <li>
              <ExampleLink to="examples/refs">Refs</ExampleLink>
            </li>
          </ul>
        </li>
        <li>
          Bonus
          <ul className="list-disc pl-4">
            <li>
              <ExampleLink to="examples/custom">Custom Hooks</ExampleLink>
            </li>
            <li>
              <ExampleLink to="examples/thinking">Thinking in react</ExampleLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default App
