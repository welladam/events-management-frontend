/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Layout } from 'src/components/organisms'
import { FormData } from 'src/components/templates'
import { updateEvent, deleteEvent, getEventById } from 'src/api/eventsApi'
import { Event, EventRequest } from 'src/types/eventType'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import FormDataSkeleton from 'src/components/templates/FormDataSkeleton'

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

  const EmptyState = () => {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <img
          src={require('src/assets/empty-state-events.png')}
          className="w-[500px] opacity-75"
        />
        <span className="text-gray-500 font-extralight text-xl">
          Oops, event not found!
        </span>
      </div>
    )
  }

  const EditFormData = () => {
    return (
      <div className="flex flex-col gap-8 py-10">
        <h1>Update Event</h1>
        {loading ? (
          <FormDataSkeleton />
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
    )
  }

  return (
    <Layout showBackButton>
      {!loading && !event ? <EmptyState /> : <EditFormData />}
    </Layout>
  )
}

export default EditEventPage
