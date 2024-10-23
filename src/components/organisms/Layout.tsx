import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Header, Footer } from '../organisms'
import { useNavigate } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
  showBackButton?: boolean
}

const Layout = ({ showBackButton, children }: LayoutProps) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow responsive-padding bg-background pb-12">
        {showBackButton && (
          <ArrowLeftIcon
            className="transition-all w-8 h-8 cursor-pointer mt-8 hover:stroke-primary"
            onClick={() => navigate(-1)}
          />
        )}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
