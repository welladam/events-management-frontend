import { useEffect, useState } from 'react'
import {
  Card,
  CardSkeleton,
  SelectInput,
  TextInput,
} from 'src/components/molecules'
import { Layout } from 'src/components/organisms'
import { getAllEvents } from 'src/api/eventsApi'
import { Event } from 'src/types/eventType'
import toast from 'react-hot-toast'
import { selectOptions } from 'src/utils/statusOptions'
import { datePattern } from 'src/utils/regexPatterns'

type EventFilters = {
  date?: string
  event?: string
  status?: string
}

const EventsPage = () => {
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState<Event[]>([])
  const [eventsFiltered, setEventsFiltered] = useState<Event[]>([])

  const [filters, setFilters] = useState<EventFilters>({})

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        const eventsResult = await getAllEvents()
        setEvents(eventsResult)
        setEventsFiltered(eventsResult)
      } catch (error) {
        toast.error(`Ops, something went wrong! Error: ${error}`)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  useEffect(() => {
    let filteredEvents = [...events]

    if (filters.event) {
      filteredEvents = filteredEvents.filter((event) =>
        event.title.toLowerCase().includes((filters.event || '').toLowerCase())
      )
    }

    if (filters.date) {
      filteredEvents = filteredEvents.filter((event) => {
        const eventDate = new Date(event.startDate).toLocaleDateString('pt-BR')
        return eventDate === filters.date
      })
    }

    if (filters.status) {
      filteredEvents = filteredEvents.filter(
        (event) => event.status === filters.status
      )
    }

    setEventsFiltered(filteredEvents)
  }, [filters, events])

  const handleEventFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value
    setFilters({ ...filters, event })
  }

  const handleDateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value
    if (datePattern.exec(date) !== null) {
      setFilters({ ...filters, date })
      return
    }

    if (filters.date != null) {
      setFilters({ ...filters, date: undefined })
    }
  }

  const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value
    setFilters({ ...filters, status })
  }

  const EventList = () => {
    if (events.length <= 0) {
      return (
        <div className="flex flex-col w-full h-full justify-center items-center">
          <img
            src={require('src/assets/empty-state-events.png')}
            className="w-[500px] opacity-75"
          />
          <span className="text-gray-500 font-extralight text-xl">
            No events available at this time!
          </span>
        </div>
      )
    }

    return (
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {eventsFiltered.map((event) => (
          <Card key={event.id} event={event} />
        ))}
      </div>
    )
  }

  const SkeletonList = () => {
    return (
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <Layout showBackButton>
      <div className="flex flex-col gap-8 py-10">
        <h1>All Events</h1>
        <div className="flex flex-col xl:flex-row py-10 px-12 bg-title rounded-2xl gap-8 xl:gap-20 shadow-lg mb-20">
          <TextInput
            title={'Search Event'}
            mode="secondary"
            maxLength={50}
            onChange={handleEventFilter}
          />
          <TextInput
            title={'Search Date'}
            mode="secondary"
            maxLength={10}
            onChange={handleDateFilter}
          />
          <SelectInput
            title={'Search Status'}
            mode="secondary"
            selectOptions={selectOptions}
            onChange={handleStatusFilter}
          />
        </div>
        {loading ? <SkeletonList /> : <EventList />}
      </div>
    </Layout>
  )
}

export default EventsPage
