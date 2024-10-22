import { useEffect, useState } from 'react'
import { Card } from 'src/components/molecules'
import { Layout } from 'src/components/organisms'
import { getAllEvents } from 'src/api/eventsApi'
import { Event } from 'src/types/eventType'

const HomePage = () => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventsData = await getAllEvents()
        setEvents(eventsData)
      } catch (error) {
        console.log('error getAllEvents', error)
      }
    }

    fetchEvent()
  }, [])

  return (
    <Layout>
      <div className="flex flex-col gap-8 py-10">
        <h1>Upcoming Events</h1>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {events.length > 0 ? (
            events.map((event) => <Card key={event.id} event={event} />)
          ) : (
            <p>No events</p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
