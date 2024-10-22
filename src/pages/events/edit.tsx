import { useEffect, useState } from 'react'
import { Layout } from 'src/components/organisms'
import { FormData } from 'src/components/templates'
import { updateEvent, deleteEvent, getEventById } from 'src/api/eventsApi'
import { Event, EventRequest } from 'src/types/eventType'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Loader } from 'src/components'

const EditEventPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [event, setEvent] = useState<Event>()
  const [loading, setLoading] = useState(false)
  const [loadingUpdate, setLoadingUpdate] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)

  useEffect(() => {
    const fetchEventById = async () => {
      try {
        if (id) {
          setLoading(true)
          const result = await getEventById(id)
          setEvent(result)
        }
      } catch (error) {
        toast.error(`Ops, something went wrong! Error: ${error}`)
      } finally {
        setLoading(false)
      }
    }

    fetchEventById()
  }, [])

  const handleUpdateEvent = async (event: EventRequest, image?: File) => {
    try {
      setLoadingUpdate(true)
      if (id) {
        await updateEvent(id, event, image)
        toast.success('Event has been updated successfully!')
      }
    } catch (error: any) {
      toast.error(`Ops, something went wrong! Error: ${error.response.data}`)
    } finally {
      setLoadingUpdate(false)
    }
  }

  const handleDeleteEvent = async (id: number) => {
    try {
      setLoadingDelete(true)
      if (id) {
        await deleteEvent(id)
        toast.success('Event has been deleted successfully!')
        navigate('/', { replace: true })
      }
    } catch (error) {
      toast.error(`Ops, something went wrong! Error: ${error}`)
    } finally {
      setLoadingDelete(false)
    }
  }

  return (
    <Layout>
      <div className="flex flex-col gap-8 py-10">
        <h1>Update Event</h1>
        {loading ? (
          <Loader />
        ) : (
          <FormData
            event={event}
            submitButtonLabel="Update Event"
            onSubmitForm={handleUpdateEvent}
            onDeleteEvent={handleDeleteEvent}
            loadingSubmit={loadingUpdate}
            loadingDelete={loadingDelete}
          />
        )}
      </div>
    </Layout>
  )
}

export default EditEventPage
