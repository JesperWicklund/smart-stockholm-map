export type LocationCategory =
  | 'transport'
  | 'education'
  | 'nature'
  | 'technology'
  | 'entertainment'
  | 'culture'
  | 'other'

export type Location = {
  id: number
  name: string
  adress: string
  description: string
  coordinates: [number, number]
  category: LocationCategory
}