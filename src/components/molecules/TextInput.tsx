import { forwardRef, HTMLProps, Ref } from 'react'
import { Input } from 'src/components/atoms'

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  title: string
  error?: string
}

const TextInput = forwardRef(
  ({ title, error, ...rest }: TextInputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <Input title={title} error={error}>
        <input
          ref={ref}
          aria-label={title}
          className="py-4 bg-transparent transition-all text-xl font-semibold border-b-2 border-border 
    outline-none focus:border-primary focus:border-b-[3px]"
          {...rest}
        />
      </Input>
    )
  }
)

TextInput.displayName = 'TextInput'
export default TextInput
