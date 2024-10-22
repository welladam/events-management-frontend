import { Button as ButtonHeadlessUI } from '@headlessui/react'
import classnames from 'classnames'

interface ButtonProps {
  children: React.ReactNode
  size?: 'default' | 'small'
  color?: 'primary' | 'secondary'
}

const ButtonColor = {
  primary: 'border-primary text-primary hover:bg-primary hover:text-white',
  secondary:
    'border-secondary text-secondary hover:bg-secondary hover:text-black',
}

const ButtonSize = {
  default: 'py-4 px-8 text-xl',
  small: 'py-2 px-4',
}

const Button = ({
  children,
  size = 'default',
  color = 'primary',
}: ButtonProps) => {
  return (
    <ButtonHeadlessUI
      className={classnames(
        'rounded-full bg-transparent border-2 min-w-20 text-lg active:translate-y-1 active:translate-x-1',
        ButtonColor[color],
        ButtonSize[size]
      )}
    >
      {children}
    </ButtonHeadlessUI>
  )
}

export default Button
