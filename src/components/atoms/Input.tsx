interface InputProps {
  title: string
  error?: string
  children: React.ReactNode
}

const Input = ({ title, error, children }: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      <span className="text-lg font-extralight">{title}</span>
      {children}
      {error && <span className="text-error font-extralight">{error}</span>}
    </div>
  )
}

export default Input
