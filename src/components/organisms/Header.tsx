import { Button } from 'src/components/atoms'

const Header = () => {
  return (
    <header className="bg-header-background bg-no-repeat bg-cover responsive-padding py-6">
      <div className="container flex justify-between items-center">
        <img src={require('src/assets/logo.png')} />
        <div>
          <Button size="small" color="secondary">
            Create Event
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
