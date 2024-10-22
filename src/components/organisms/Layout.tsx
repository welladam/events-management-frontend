import { Header } from '../organisms'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Header />
      <main className="flex-grow responsive-padding bg-background">
        {children}
      </main>
    </div>
  )
}

export default Layout
