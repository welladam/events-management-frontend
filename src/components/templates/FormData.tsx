import { Button } from 'src/components/atoms'
import { UploadCard, TextInput, SelectInput } from 'src/components/molecules'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { Event, EventRequest } from 'src/types/eventType'

const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
const numberPattern = /^\d{1,4}$/

const selectOptions = [
  { value: 'started', label: 'Started' },
  { value: 'completed', label: 'Completed' },
  { value: 'paused', label: 'Paused' },
]

interface FormDataProps {
  event?: Event
  submitButtonLabel: string
  onSubmitForm?: (data: EventRequest, image: File | undefined) => void
  onDeleteEvent?: (id: number) => void
  loadingSubmit?: boolean
  loadingDelete?: boolean
}

const FormData = ({
  event,
  submitButtonLabel,
  onSubmitForm,
  onDeleteEvent,
  loadingSubmit,
  loadingDelete,
}: FormDataProps) => {
  const [image, setImage] = useState<File>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventRequest>({
    defaultValues: {
      title: event?.title,
      description: event?.description,
      startDate: event?.startDate,
      endDate: event?.endDate,
      price: event?.price?.toString(),
      status: event?.status,
    },
  })

  const onSubmit: SubmitHandler<EventRequest> = (data) => {
    onSubmitForm && onSubmitForm(data, image)
  }

  return (
    <form
      className="flex flex-col gap-12 xl:w-3/5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <UploadCard onFileUpload={setImage} />
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
        <TextInput
          title="Title"
          error={errors.title?.message}
          maxLength={50}
          {...register('title', { required: 'Title is required' })}
        />
        <TextInput
          title="Description"
          maxLength={50}
          {...register('description')}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
        <TextInput
          title="Start Date"
          error={errors.startDate?.message}
          maxLength={10}
          {...register('startDate', {
            required: 'Start Date is required',
            pattern: {
              value: datePattern,
              message: 'Invalid date format',
            },
          })}
        />
        <TextInput
          title="End Date"
          error={errors.endDate?.message}
          maxLength={10}
          {...register('endDate', {
            required: 'End Date is required',
            pattern: {
              value: datePattern,
              message: 'Invalid date format',
            },
          })}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
        <TextInput
          title="Price"
          error={errors.price?.message}
          maxLength={4}
          {...register('price', {
            pattern: {
              value: numberPattern,
              message: 'Price must be a number with up to 4 digits',
            },
          })}
        />
        <SelectInput
          title="Status"
          {...register('status')}
          selectOptions={selectOptions}
        />
      </div>
      <div className="flex justify-center lg:justify-start gap-8 mt-10">
        <Button type="submit" loading={loadingSubmit}>
          {submitButtonLabel}
        </Button>
        {event && (
          <Button
            color="warning"
            onClick={() => onDeleteEvent && onDeleteEvent(event.id)}
            loading={loadingDelete}
          >
            Delete Event
          </Button>
        )}
      </div>
    </form>
  )
}

export default FormData
