import { Event } from 'src/types/eventType'

interface BannerProps {
  event: Event
}

const Banner = ({ event }: BannerProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
      <img
        alt={`Image of ${event.title}`}
        src={event.imageUrl || require('src/assets/placeholder.webp')}
        className="w-full lg:w-1/2 h-80 lg:h-96 rounded-3xl object-cover shadow-md"
      />
      <div className="flex flex-col gap-6 pr-32">
        <h2 className="text-6xl font-extralight">{event.title}</h2>
        <p className="font-extralight text-gray-500 text-2xl">
          {event.description}
        </p>
      </div>
    </div>
  )
}

export default Banner
