import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'src/components/atoms'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="bg-header-background bg-no-repeat bg-cover responsive-padding py-6">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img src={require('src/assets/logo.png')} />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/events"
            className="transition-all text-lg text-secondary rounded-3xl hover:bg-secondary hover:text-black px-4"
          >
            All Events
          </Link>
          <Button
            size="small"
            color="secondary"
            onClick={() => navigate('/events/new')}
          >
            Create Event
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
