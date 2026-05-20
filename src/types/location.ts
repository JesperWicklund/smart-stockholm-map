export type LocationCategory =
  | 'transport'
  | 'housing'
  | 'environment'
  | 'infrastructure'

export type LocationStatus =
  | 'existing'
  | 'planned'
  | 'under-construction'

export type Location = {
  id: number
  name: string
  description: string
  coordinates: [number, number]
  category: LocationCategory
  status: LocationStatus
  district: string
}