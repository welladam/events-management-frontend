export interface Event {
  id: number
  title: string
  description?: string
  startDate: string
  endDate: string
  price?: number
  status?: string
  imageUrl?: string
}

export interface EventRequest {
  title: string
  description?: string
  startDate: string
  endDate: string
  price?: string
  status?: string
}
