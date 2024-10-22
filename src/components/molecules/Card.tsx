import { format, parseISO } from 'date-fns'
import { Link } from 'react-router-dom'
import { Event } from 'src/types/eventType'

interface CardProps {
  event: Event
}

const Card = ({ event }: CardProps) => {
  console.log('event.startDate', event)
  const date = parseISO(event.startDate)
  return (
    <Link
      className="flex flex-col transition drop-shadow-sm hover:drop-shadow-md active:translate-x-1 active:translate-y-1 
    rounded-3xl w-full lg:max-w-[400px] 2xl:max-w-[500px] bg-white cursor-pointer"
      to={`/events/update/${event.id}`}
    >
      <img
        src={event.imageUrl || require('src/assets/placeholder.webp')}
        alt={`Image of ${event.title}`}
        className="w-full h-[200px] object-cover rounded-t-3xl"
      />
      <div className="flex gap-6 px-6 py-8">
        <div className="flex flex-col text-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-primary font-semibold uppercase text-lg leading-none">
              {format(date, 'MMM')}
            </span>
            <span className="font-bold text-4xl leading-none">
              {format(date, 'dd')}
            </span>
          </div>
          {event.price?.toString() && (
            <div className="flex flex-col">
              <span className="text-primary font-semibold leading-none">
                PRICE
              </span>
              <span className="font-bold text-3xl leading-none">{`$${event.price}`}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold leading-6 line-clamp-2 overflow-ellipsis">
            {event.title}
          </p>
          {event.description && (
            <p className="text-lg text-gray-500 leading-5 line-clamp-2 overflow-ellipsis">
              {event.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default Card
