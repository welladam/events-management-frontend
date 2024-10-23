import classnames from 'classnames'

interface InputProps {
  title: string
  error?: string
  mode?: 'primary' | 'secondary'
  children: React.ReactNode
}

const Input = ({ title, error, mode, children }: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      <span
        className={classnames(
          mode === 'secondary' && 'text-secondary focus:border-secondary',
          'text-lg font-extralight'
        )}
      >
        {title}
      </span>
      {children}
      {error && <span className="text-error font-extralight">{error}</span>}
    </div>
  )
}

export default Input
