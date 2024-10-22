import { forwardRef, HTMLProps, Ref } from 'react'
import { Input } from 'src/components/atoms'

interface SelectInputProps extends HTMLProps<HTMLSelectElement> {
  title: string
  error?: string
  selectOptions?: { value: string; label: string }[]
}

const SelectInput = forwardRef(
  (
    { title, error, selectOptions, ...rest }: SelectInputProps,
    ref: Ref<HTMLSelectElement>
  ) => {
    return (
      <Input title={title} error={error}>
        <select
          ref={ref}
          aria-label={title}
          className="py-4 bg-transparent transition-all text-xl font-semibold border-b-2 border-border 
    outline-none focus:border-primary focus:border-b-[3px]"
          {...rest}
        >
          <option></option>
          {selectOptions?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Input>
    )
  }
)

SelectInput.displayName = 'SelectInput'
export default SelectInput
