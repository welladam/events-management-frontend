import classnames from 'classnames'
import { Loader } from 'src/components/atoms'

interface ButtonProps {
  children: React.ReactNode
  size?: 'default' | 'small'
  color?: 'primary' | 'secondary' | 'warning'
  type?: 'button' | 'submit'
  loading?: boolean
  onClick?: () => void
}

const ButtonColor = {
  primary: 'border-primary text-primary hover:bg-primary hover:text-white',
  secondary:
    'border-secondary text-secondary hover:bg-secondary hover:text-black',
  warning: 'border-error text-error hover:bg-error hover:text-black',
}

const ButtonSize = {
  default: 'py-4 px-8 text-xl',
  small: 'py-2 px-4',
}

const Button = ({
  children,
  size = 'default',
  color = 'primary',
  type = 'button',
  loading = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classnames(
        'transition rounded-full bg-transparent border-2 min-w-20 text-lg active:translate-y-1 active:translate-x-1',
        ButtonColor[color],
        ButtonSize[size]
      )}
      type={type}
      onClick={onClick}
    >
      {loading ? (
        <div className="min-w-20">
          <Loader />
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
