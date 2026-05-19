import type { Location } from '../types/location'

export const locations: Location[] = [
 

  {
    id: 1,
    name: 'KTH Royal Institute of Technology',
    adress: 'Brinellvägen 8, 114 28 Stockholm',
    description: 'Technical university in Stockholm',
    coordinates: [18.0724, 59.3498],
    category: 'education',
  },
  {
    id: 2,
    name: 'Gröna Lund',
    adress: 'Gröna Lund, Lilla Allmänna Gränd 9, 115 21 Stockholm',
    description: 'Amusement park on Djurgården island',
    coordinates: [18.0964, 59.3270],
    category: 'entertainment',
  },
  {
    id: 3,
    name: 'Stockholm Central Station',
    adress: 'Stockholm Central Station, 111 51 Stockholm',
    description: 'Main transportation hub in Stockholm',
    coordinates: [18.0583, 59.3301],
    category: 'transport',
  },
  {
    id: 4,
    name: "Avicii Arena",
    adress: "Globentorget 2, 121 77 Stockholm",
    description: "Multi-purpose arena in Stockholm, formerly known as Ericsson Globe",
    coordinates: [18.0798, 59.2960],
    category: 'entertainment',
  },
  {
    id: 5,
    name: 'Stockholm City Hall',
    adress: 'Hantverkargatan 1, 111 28 Stockholm',
    description: 'Seat of the City of Stockholm',
    coordinates: [18.0544, 59.3275],
    category: 'culture',
  }
]