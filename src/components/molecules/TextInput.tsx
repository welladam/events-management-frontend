import { forwardRef, HTMLProps, Ref } from 'react'
import classnames from 'classnames'
import { Input } from 'src/components/atoms'

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  title: string
  error?: string
  mode?: 'primary' | 'secondary'
}

const TextInput = forwardRef(
  (
    { title, error, mode = 'primary', ...rest }: TextInputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <Input title={title} error={error} mode={mode}>
        <input
          ref={ref}
          aria-label={title}
          className={classnames(
            mode === 'secondary' && 'text-secondary focus:border-secondary',
            'py-4 bg-transparent transition-all text-xl font-semibold border-b-2 border-border outline-none focus:border-primary focus:border-b-[3px]'
          )}
          {...rest}
        />
      </Input>
    )
  }
)

TextInput.displayName = 'TextInput'
export default TextInput
