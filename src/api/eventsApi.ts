import { Event, NewEvent } from 'src/types/eventType'
import api from './axiosConfig'

export const getAllEvents = async (): Promise<Event[]> => {
  const response = await api.get('/events')
  return response.data
}

export const getEventById = async (id: number): Promise<Event> => {
  const response = await api.get(`/events/${id}`)
  return response.data
}

export const createEvent = async (
  newEvent: NewEvent,
  imageFile: File
): Promise<void> => {
  const formData = new FormData()

  formData.append('title', newEvent.title)
  formData.append('startDate', newEvent.startDate)
  formData.append('endDate', newEvent.endDate)
  formData.append('price', String(newEvent.price))
  formData.append('status', newEvent.status)
  formData.append('file', imageFile)

  await api.post('/events', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const updateEvent = async (
  id: number,
  updatedEvent: NewEvent,
  imageFile: File
): Promise<Event> => {
  const formData = new FormData()

  formData.append('title', updatedEvent.title)
  formData.append('startDate', updatedEvent.startDate)
  formData.append('endDate', updatedEvent.endDate)
  formData.append('price', String(updatedEvent.price))
  formData.append('status', updatedEvent.status)
  formData.append('file', imageFile)

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
