import { useState } from 'react'
import { Layout } from 'src/components/organisms'
import { FormData } from 'src/components/templates'
import { createEvent } from 'src/api/eventsApi'
import { EventRequest } from 'src/types/eventType'

const CreateEventPage = () => {
  const [loading, setLoading] = useState(false)
  const postCreateNewEvent = async (event: EventRequest, image?: File) => {
    try {
      setLoading(true)
      await createEvent(event, image)
      //TODO: Add success message
    } catch (error) {
      console.log('error getAllEvents', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className="flex flex-col gap-8 py-10">
        <h1>Create new Event</h1>
        <FormData
          submitButtonLabel="Create new Event"
          onSubmitForm={(data, image) => postCreateNewEvent(data, image)}
          loadingSubmit={loading}
        />
      </div>
    </Layout>
  )
}

export default CreateEventPage
