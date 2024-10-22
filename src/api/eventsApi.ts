import { Event, EventRequest } from 'src/types/eventType'
import api from './axiosConfig'
import { convertToISO } from 'src/helpers/dateHelper'

export const getAllEvents = async (): Promise<Event[]> => {
  const response = await api.get('/events')
  return response.data
}

export const getEventById = async (id: string): Promise<Event> => {
  const response = await api.get(`/events/${id}`)
  return response.data
}

export const createEvent = async (
  event: EventRequest,
  imageFile?: File
): Promise<void> => {
  const formData = formatEventFormData(event, imageFile)

  await api.post('/events', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const updateEvent = async (
  id: string,
  updatedEvent: EventRequest,
  imageFile?: File
): Promise<Event> => {
  const formData = formatEventFormData(updatedEvent, imageFile)

  const response = await api.put(`/events/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

export const deleteEvent = async (id: number): Promise<void> => {
  await api.delete(`/events/${id}`)
}

const formatEventFormData = (event: EventRequest, image?: File) => {
  const formData = new FormData()
  const eventFormatted = {
    ...event,
    startDate: convertToISO(event.startDate),
    endDate: convertToISO(event.endDate),
  }
  formData.append(
    'event',
    new Blob([JSON.stringify(eventFormatted)], { type: 'application/json' })
  )
  image && formData.append('file', image)
  return formData
}
