import { useEffect, useState } from 'react'
import { Banner, Card, CardSkeleton } from 'src/components/molecules'
import { Layout } from 'src/components/organisms'
import { getAllUpcomingEvents, getAllPastEvents } from 'src/api/eventsApi'
import { Event } from 'src/types/eventType'
import toast from 'react-hot-toast'

const HomePage = () => {
  const [loading, setLoading] = useState(false)
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])
  const [pastEvents, setPastEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        const upcomingEventsData = await getAllUpcomingEvents()
        const pastEventsData = await getAllPastEvents()
        setUpcomingEvents(upcomingEventsData)
        setPastEvents(pastEventsData)
      } catch (error) {
        toast.error(`Ops, something went wrong! Error: ${error}`)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const EventList = ({ events }: { events: Event[] }) => {
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
        {events.map((event) => (
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
    <Layout>
      <div className="flex flex-col gap-8 py-10">
        {upcomingEvents.length > 0 && (
          <div className="flex flex-col gap-8 my-20">
            <h1>The next event for you is...</h1>
            <Banner event={upcomingEvents[0]} />
          </div>
        )}
        <h1>Upcoming Events</h1>
        {loading ? <SkeletonList /> : <EventList events={upcomingEvents} />}
        <h1 className="mt-12">Past Events</h1>
        {loading ? <SkeletonList /> : <EventList events={pastEvents} />}
      </div>
    </Layout>
  )
}

export default HomePage
