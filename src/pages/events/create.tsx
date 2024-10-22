/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Layout } from 'src/components/organisms'
import { FormData } from 'src/components/templates'
import { createEvent } from 'src/api/eventsApi'
import { EventRequest } from 'src/types/eventType'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const CreateEventPage = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleCreateNewEvent = async (event: EventRequest, image?: File) => {
    try {
      setLoading(true)
      await createEvent(event, image)
      toast.success('Event has been created successfully!')
      navigate('/')
    } catch (error: any) {
      toast.error(`Ops, something went wrong! Error: ${error.response.data}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout showBackButton>
      <div className="flex flex-col gap-8 py-10">
        <h1>Create new Event</h1>
        <FormData
          submitButtonLabel="Create new Event"
          onSubmitForm={handleCreateNewEvent}
          loadingSubmit={loading}
        />
      </div>
    </Layout>
  )
}

export default CreateEventPage
