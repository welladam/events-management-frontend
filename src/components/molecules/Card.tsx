import { format, parseISO } from 'date-fns'
import { Link } from 'react-router-dom'
import { Event } from 'src/types/eventType'

interface CardProps {
  event: Event
}

const Card = ({ event }: CardProps) => {
  const date = parseISO(event.startDate)
  return (
    <Link
      className="flex flex-col transition drop-shadow-sm hover:drop-shadow-md active:translate-x-1 active:translate-y-1 
    rounded-3xl w-full lg:w-[400px] 2xl:w-[440px] bg-white cursor-pointer"
      to={`/events`}
    >
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full max-h-[200px] object-cover rounded-t-3xl"
      />
      <div className="flex gap-6 px-6 py-8">
        <div className="flex flex-col text-center justify-between gap-4">
          <div>
            <p className="text-primary font-semibold uppercase text-lg leading-none">
              {format(date, 'MMM')}
            </p>
            <p className="font-bold text-4xl leading-none">
              {format(date, 'dd')}
            </p>
          </div>
          {event.price && (
            <div>
              <p className="text-primary font-semibold leading-none">PRICE</p>
              <p className="font-bold text-3xl leading-none">{`$${event.price}`}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold leading-none line-clamp-2 overflow-ellipsis">
            {event.title}
          </p>
          {event.description && (
            <p className="text-lg text-gray-500 line-clamp-2 overflow-ellipsis">
              {event.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default Card
