import { Link } from 'react-router-dom'

const Component = () => {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

Component.displayName = 'NoMatch Page'
