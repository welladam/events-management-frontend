import classnames from 'classnames'
import { ReactComponent as Spinner } from 'src/assets/infinite-spinner.svg'

const SpinnerStroke = {
  primary: 'stroke-primary',
  secondary: 'stroke-secondary',
  warning: 'stroke-error',
}

interface LoaderProps {
  stroke?: 'primary' | 'secondary' | 'warning'
}

const Loader = ({ stroke = 'primary' }: LoaderProps) => {
  return (
    <Spinner className={classnames('w-fit h-fit', SpinnerStroke[stroke])} />
  )
}

export default Loader
